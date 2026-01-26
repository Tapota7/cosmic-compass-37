import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Lock, Mail, Sparkles, GraduationCap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import SEOHead from '@/components/SEOHead';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const potentialCourses = [
  { id: 'astro-basics', title: 'Astrología desde Cero', emoji: '⭐', level: 'Principiante' },
  { id: 'natal-chart', title: 'Carta Natal', emoji: '🌙', level: 'Intermedio' },
  { id: 'numerology-practice', title: 'Numerología Práctica', emoji: '🔢', level: 'Principiante' },
  { id: 'transits', title: 'Tránsitos', emoji: '🌟', level: 'Avanzado' },
  { id: 'synastry', title: 'Sinastría', emoji: '💕', level: 'Intermedio' },
];

const courseInterests = [
  { id: 'astro-basics', label: 'Astrología desde cero' },
  { id: 'natal-chart', label: 'Interpretación de Carta Natal' },
  { id: 'numerology', label: 'Numerología práctica' },
  { id: 'transits', label: 'Tránsitos y predicciones' },
  { id: 'synastry', label: 'Sinastría y compatibilidad' },
];

const formSchema = z.object({
  email: z.string().trim().email('Por favor ingresa un email válido').max(255, 'Email muy largo'),
  interests: z.array(z.string()).min(1, 'Selecciona al menos un tema de interés'),
});

type FormData = z.infer<typeof formSchema>;

const CoursesComingSoon = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      interests: [],
    },
  });

  const { data: subscriberCount = 0 } = useQuery({
    queryKey: ['course-subscribers-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('email_leads')
        .select('*', { count: 'exact', head: true })
        .eq('source', 'courses');
      return count || 0;
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('email_leads').insert({
        email: data.email,
        source: 'courses',
        calculation_data: { interests: data.interests },
      });

      if (error?.code === '23505') {
        toast.error('Este email ya está registrado. ¡Te avisaremos pronto!');
      } else if (error) {
        console.error('Error registering:', error);
        toast.error('Hubo un error. Por favor intenta de nuevo.');
      } else {
        toast.success('¡Listo! Te avisaremos cuando los cursos estén disponibles.');
        form.reset();
      }
    } catch (err) {
      toast.error('Error de conexión. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Cursos Online - Próximamente | Sabiduría Cuántica"
        description="Aprende astrología y numerología a tu ritmo con nuestros cursos online. Regístrate para ser el primero en enterarte cuando estén disponibles."
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            {/* Animated Icon */}
            <div className="text-7xl md:text-8xl mb-6 float-animation">
              <GraduationCap className="w-20 h-20 md:w-24 md:h-24 mx-auto text-primary" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Cursos Online
              <span className="block gradient-text mt-2">Próximamente</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Aprende astrología y numerología a tu ritmo
            </p>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Estamos preparando cursos completos para que puedas profundizar en el conocimiento cósmico.
              Suscríbete para ser el primero en enterarte.
            </p>

            {/* Subscriber Counter */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-12">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold gradient-text">{subscriberCount}</span>
              <span className="text-muted-foreground">personas esperando</span>
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Cursos en <span className="gradient-text">preparación</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {potentialCourses.map((course) => (
                <Card
                  key={course.id}
                  className="glass-card relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
                >
                  {/* Lock Overlay */}
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center z-10 group-hover:bg-background/50 transition-colors">
                    <Lock className="w-6 h-6 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardContent className="p-4 text-center">
                    <span className="text-3xl block mb-2">{course.emoji}</span>
                    <h4 className="font-semibold text-sm">{course.title}</h4>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {course.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Card className="glass-card max-w-lg mx-auto border-primary/20">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <Mail className="w-10 h-10 mx-auto text-primary mb-3" />
                  <h3 className="font-display text-xl font-semibold">
                    Únete a la lista de espera
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Te avisaremos cuando los cursos estén disponibles
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tu email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="tu@email.com"
                              className="bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Interests Checkboxes */}
                    <FormField
                      control={form.control}
                      name="interests"
                      render={() => (
                        <FormItem>
                          <FormLabel>¿Qué te gustaría aprender?</FormLabel>
                          <div className="space-y-3 mt-2">
                            {courseInterests.map((interest) => (
                              <FormField
                                key={interest.id}
                                control={form.control}
                                name="interests"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(interest.id)}
                                        onCheckedChange={(checked) => {
                                          const newValue = checked
                                            ? [...field.value, interest.id]
                                            : field.value?.filter((v) => v !== interest.id);
                                          field.onChange(newValue);
                                        }}
                                      />
                                    </FormControl>
                                    <Label className="text-sm font-normal cursor-pointer">
                                      {interest.label}
                                    </Label>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Registrando...'
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Avisarme cuando estén disponibles
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesComingSoon;
