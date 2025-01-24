# Content Management Guide

## Updating Content

### Profile Information
1. Navigate to `client/src/components/sections/Hero.tsx`
2. Update the following sections:
```typescript
// Update name
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
  Cameron McCallum
</span>

// Update title
<h3 className="text-2xl md:text-3xl font-semibold mb-4">
  AI & Customer Success Innovation Leader
</h3>

// Update description
<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
  Transforming Customer Success through AI-Powered Solutions...
</p>
```

### Adding Projects
1. Create a new case study component in `client/src/pages/`:
```typescript
export default function CaseStudyNew() {
  const metrics = [
    { value: "↑40%", label: "Improvement" },
    // Add metrics
  ];
  
  // Add project content
}
```

2. Update the projects list in `client/src/pages/Projects.tsx`

### Updating Skills
1. Navigate to `client/src/components/sections/TechStack.tsx`
2. Modify the `techStack` array:
```typescript
const techStack = [
  { Icon: SiReact, name: "React" },
  // Add or remove technologies
];
```

### Adding Blog Posts
1. Create new blog post in `client/src/pages/blog/`
2. Update blog listing in `client/src/pages/Blog.tsx`

## Image Management
- Place all images in `client/public/images/`
- Use optimized formats (WebP for photos, SVG for icons)
- Follow naming convention: `feature-name-description.ext`

## SEO Optimization
1. Update meta tags in relevant page components:
```typescript
<h1 className="sr-only">
  Cameron McCallum - AI & Customer Success Innovation Leader
</h1>
```

## Content Guidelines
- Use clear, concise descriptions
- Maintain consistent tone and style
- Optimize images before upload
- Keep content up-to-date
- Follow accessibility best practices

## Database Updates
Use the provided API endpoints for content updates:
```typescript
// Add new project
POST /api/projects
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js"]
}

// Update case study
PUT /api/case-studies/:id
{
  "content": "Updated content..."
}
```
