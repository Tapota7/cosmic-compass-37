import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  reading_time: number;
  featured: boolean;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  image_url: string | null;
}

export const uploadBlogImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `articles/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath);

  return data.publicUrl;
};

export const deleteBlogImage = async (imageUrl: string): Promise<void> => {
  const path = imageUrl.split('/blog-images/')[1];
  if (path) {
    await supabase.storage.from('blog-images').remove([path]);
  }
};

export const useBlogArticles = (onlyPublished = true) => {
  return useQuery({
    queryKey: ['blog-articles', onlyPublished],
    queryFn: async () => {
      let query = supabase
        .from('blog_articles')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (onlyPublished) {
        query = query.eq('published', true);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as BlogArticle[];
    },
  });
};

export const useBlogArticleBySlug = (slug: string | undefined) => {
  return useQuery({
    queryKey: ['blog-article', slug],
    queryFn: async () => {
      if (!slug) return null;
      
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data as BlogArticle | null;
    },
    enabled: !!slug,
  });
};

export const useCreateBlogArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (article: Omit<BlogArticle, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('blog_articles')
        .insert(article)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-articles'] });
    },
  });
};

export const useUpdateBlogArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...article }: Partial<BlogArticle> & { id: string }) => {
      const { data, error } = await supabase
        .from('blog_articles')
        .update(article)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-articles'] });
    },
  });
};

export const useDeleteBlogArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_articles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-articles'] });
    },
  });
};
