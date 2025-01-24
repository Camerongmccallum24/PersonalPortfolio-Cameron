# Deployment Guide

## Prerequisites
- Node.js 18+
- PostgreSQL database
- Domain name (optional)
- SSL certificate (recommended)

## Production Build

### 1. Environment Setup
Create a `.env` file with production settings:
```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:port/dbname
PORT=5000
```

### 2. Build Process
```bash
# Install dependencies
npm install

# Build frontend
npm run build

# Start production server
npm start
```

## Self-Hosting Options

### Option 1: Virtual Private Server (VPS)

#### Setup on Ubuntu Server
```bash
# Update system
sudo apt update && sudo apt upgrade

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Clone repository
git clone <repository-url>
cd <project-directory>

# Setup process manager (PM2)
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option 2: Platform as a Service (PaaS)

#### Heroku Deployment
1. Install Heroku CLI
2. Initialize Git repository
3. Create Heroku app:
```bash
heroku create
heroku addons:create heroku-postgresql
git push heroku main
```

#### Railway Deployment
1. Connect GitHub repository
2. Add PostgreSQL plugin
3. Configure environment variables
4. Deploy automatically from main branch

## Database Migration
```bash
# Update schema
npm run db:push

# Verify database connection
npm run db:check
```

## SSL Configuration
Using Let's Encrypt with Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Monitoring and Maintenance
- Set up monitoring with PM2
- Configure logging
- Schedule regular backups
- Set up health checks

## Security Considerations
- Enable firewall
- Set up rate limiting
- Configure CORS properly
- Keep dependencies updated
- Use secure headers

## Troubleshooting
Common issues and solutions:
1. Database connection errors
2. Build process failures
3. Nginx configuration issues
4. PM2 process management

## Backup Strategy
1. Database backups
2. File system backups
3. Configuration backups
4. Automated backup scheduling

## Performance Optimization
1. Frontend Optimization
   - Enable code splitting
   - Implement lazy loading
   - Optimize images and assets
   - Use CDN for static content
   - Implement caching strategies

2. Backend Optimization
   - Enable compression
   - Implement caching
   - Optimize database queries
   - Use connection pooling
   - Configure proper timeouts

3. Database Optimization
   - Index optimization
   - Query optimization
   - Regular maintenance
   - Connection pool management

## API Documentation

### Authentication Endpoints
```typescript
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

### Project Endpoints
```typescript
GET /api/projects
GET /api/projects/:id
POST /api/projects
PUT /api/projects/:id
```

### Case Study Endpoints
```typescript
GET /api/case-studies
GET /api/case-studies/:id
POST /api/case-studies
PUT /api/case-studies/:id
```

### Contact Endpoints
```typescript
POST /api/contact
```

## Development Best Practices
1. Code Quality
   - Follow TypeScript best practices
   - Use ESLint and Prettier
   - Write unit tests
   - Implement error handling

2. Git Workflow
   - Use feature branches
   - Write meaningful commit messages
   - Review code before merging
   - Keep dependencies updated

3. Security
   - Implement input validation
   - Use proper authentication
   - Secure API endpoints
   - Regular security audits