
# Plan: Nueva Seccion "Sobre Mi" en la Pagina Principal

## Resumen

Agregar una seccion personal "Sobre Mi" entre los testimonios y el CTA final, presentando a Damian como el rostro detras de Sabiduria Cuantica con un diseno de dos columnas responsive.

---

## Cambios a Realizar

### 1. Copiar Imagen de Perfil

Copiar la imagen subida `user-uploads://Sobre_MI.png` al directorio de assets:

```
src/assets/sobre-mi-damian.png
```

### 2. Modificar Home.tsx

Agregar la nueva seccion entre el bloque de Testimonios (linea 327) y el CTA Final (linea 329).

#### Estructura de la Seccion:

```text
+--------------------------------------------------+
|                   SOBRE MI                        |
|                                                   |
|   +-------------+  +---------------------------+  |
|   |             |  | El Alma Detras de...      |  |
|   |   IMAGEN    |  | Soy Damian...             |  |
|   |   40%       |  | [Contenido narrativo]     |  |
|   |             |  | [Quote destacado]         |  |
|   |             |  | [Badges especialidades]   |  |
|   |             |  | [CTA Button]              |  |
|   +-------------+  +---------------------------+  |
|        60%                                        |
+--------------------------------------------------+
```

#### Elementos Principales:

**A. Contenedor de Seccion:**
- Clase: `py-20 md:py-28` (padding vertical generoso)
- Fondo: Mantener consistencia con otras secciones

**B. Layout Grid:**
- Desktop: `grid-cols-1 lg:grid-cols-5 gap-12`
- Columna imagen: `lg:col-span-2` (40%)
- Columna texto: `lg:col-span-3` (60%)

**C. Imagen de Damian:**
- Border-radius: `rounded-2xl` (16px)
- Shadow violeta: `shadow-[0_0_40px_hsl(var(--primary)/0.3)]`
- Hover glow: `hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)]`
- Max-width: 400px
- Object-fit: cover

**D. Contenido de Texto:**

| Elemento | Estilo |
|----------|--------|
| Titulo H2 | `font-display text-3xl md:text-4xl` con `.gradient-text` |
| Subtitulo enfasis | `text-xl font-semibold text-primary` |
| Parrafos narrativos | `text-muted-foreground leading-relaxed` |
| Quote destacado | `text-xl md:text-2xl font-bold italic text-foreground` con comillas decorativas |
| Firma | `font-semibold text-foreground` + ubicacion `text-muted-foreground` |
| Badges | Flex wrap con iconos y fondo `bg-primary/10` |
| Experiencia | `text-sm text-muted-foreground` |
| CTA | Boton primario con enlace a `/consultas` |

**E. Badges de Especialidades:**

```
[Astrologo Evolutivo]  [Numerologo]  [Acompanante de Procesos]
```

Cada badge con:
- Icono emoji
- Fondo semi-transparente violeta
- Border-radius redondeado
- Padding compacto

---

## Codigo de la Seccion (Vista Previa)

```tsx
{/* About Me Section */}
<section className="py-20 md:py-28">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      
      {/* Image Column - 40% */}
      <div className="lg:col-span-2 flex justify-center">
        <img 
          src={sobreMiImage}
          alt="Damian - Fundador de Sabiduria Cuantica"
          className="w-full max-w-[400px] object-cover rounded-2xl 
                     shadow-[0_0_40px_hsl(var(--primary)/0.3)]
                     hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)]
                     transition-shadow duration-500"
        />
      </div>
      
      {/* Text Column - 60% */}
      <div className="lg:col-span-3 space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          El Alma Detras de <span className="gradient-text">Sabiduria Cuantica</span>
        </h2>
        
        <p className="text-xl font-semibold text-primary">
          Soy Damian, y no siempre crei en esto.
        </p>
        
        {/* Narrative paragraphs */}
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Hasta los 27 anos era completamente esceptico...</p>
          <p>En esa busqueda desesperada por encontrar respuestas...</p>
        </div>
        
        {/* Highlighted Quote */}
        <blockquote className="text-xl md:text-2xl font-bold italic 
                               text-foreground my-8 pl-4 
                               border-l-4 border-primary">
          "Una carta natal que sin conocerme, me conocia completamente."
        </blockquote>
        
        {/* More narrative */}
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Fue mi mapa de regreso a mi mismo...</p>
          <p>Hoy, mi mision es simple pero profunda...</p>
          <p className="text-primary font-medium">
            Si estas aqui, es porque algo resuena en ti.
            Dejame acompanarte en tu camino de regreso a casa.
          </p>
        </div>
        
        {/* Signature */}
        <div className="pt-4">
          <p className="font-semibold text-foreground">— Damian</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Bell Ville, Cordoba, Argentina
          </p>
        </div>
        
        {/* Specialty Badges */}
        <div className="flex flex-wrap gap-3 pt-4">
          <Badge>Astrologo Evolutivo</Badge>
          <Badge>Numerologo</Badge>
          <Badge>Acompanante de Transformacion</Badge>
        </div>
        
        {/* Experience Line */}
        <p className="text-sm text-muted-foreground">
          9 anos de experiencia en Astrologia Karmica, Numerologia y Biodecodificacion
        </p>
        
        {/* CTA Button */}
        <Button asChild size="lg" className="mt-6">
          <Link to="/consultas">
            <Sparkles className="mr-2 h-5 w-5" />
            Reservar mi Consulta
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

## Responsive Design

| Breakpoint | Comportamiento |
|------------|----------------|
| Mobile (<768px) | 1 columna, imagen arriba, texto abajo |
| Tablet (768-1024px) | 1 columna con imagen centrada |
| Desktop (>1024px) | 2 columnas lado a lado (40/60) |

---

## Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `src/assets/sobre-mi-damian.png` | Nueva imagen (copiada) |
| `src/pages/Home.tsx` | Nueva seccion "Sobre Mi" insertada |

---

## Estilos Utilizados

- Reutiliza clases existentes: `gradient-text`, `glass-card`, `font-display`
- Sombra violeta personalizada para la imagen
- Badges con `bg-primary/10` y `text-primary`
- Quote con borde izquierdo destacado
