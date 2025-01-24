# Site Structure Documentation

## Component Organization

### Pages
Located in `client/src/pages/`:
- `Home.tsx`: Landing page
- `About.tsx`: About section with skills and experience
- `Projects.tsx`: Portfolio projects showcase
- `CaseStudy*.tsx`: Individual case study pages
- `Contact.tsx`: Contact form and information
- `Blog.tsx`: Blog posts section

### Component Sections
Located in `client/src/components/sections/`:
- `Hero.tsx`: Main landing section
- `TechStack.tsx`: Technology expertise showcase
- `SkillsVisualization.tsx`: Interactive skills display
- `AnalyticsDashboard.tsx`: Project metrics visualization

### Reusable Components
Located in `client/src/components/`:
- `ProjectCard.tsx`: Project preview cards
- `layout/`: Layout components (header, footer, etc.)
- `ui/`: Shadcn UI components

## Routing Structure
Using `wouter` for routing:
```typescript
<Switch>
  <Route path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/projects" component={Projects}/>
  <Route path="/case-study/:id" component={CaseStudy}/>
  <Route path="/contact" component={Contact}/>
  <Route path="/blog" component={Blog}/>
</Switch>
```

## State Management
- React Query for API data fetching
- React Context for theme and UI state
- Local component state for UI interactions

## Styling System
- TailwindCSS for utility-first styling
- CSS Modules for component-specific styles
- Global styles in `client/src/index.css`
- Theme configuration in `theme.json`

## API Integration
Backend routes in `server/routes.ts`:
```typescript
app.get('/api/projects', getProjects);
app.get('/api/case-studies/:id', getCaseStudy);
app.post('/api/contact', submitContact);
```

## Database Schema
Located in `db/schema.ts`:
- Projects table
- Case Studies table
- Skills table
- Blog Posts table
