# Adonis AIDPI API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## TO RUN

Use the adonis command to run app

```bash
adonis serve --dev
```

### Seeds

Run the following command to run user seeds. Seeds in Database/seeds/UserSeeder

```bash
adonis seed
```
### ROUTES
│ Route      │ Verb(s)   │ Handler                 │ Middleware │ Name          │
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /          │ HEAD,GET  │ Closure                 │            │ /             │        
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /sessions  │ POST      │ SessionController.store │            │ /sessions     │        
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /users     │ HEAD,GET  │ UserController.index    │ auth       │ users.index   │        
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /users     │ POST      │ UserController.store    │ auth       │ users.store   │       
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /users/:id │ HEAD,GET  │ UserController.show     │ auth       │ users.show    │       
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /users/:id │ PUT,PATCH │ UserController.update   │ auth       │ users.update  │     
├────────────┼───────────┼─────────────────────────┼────────────┼───────────────┼
│ /users/:id │ DELETE    │ UserController.destroy  │ auth       │ users.destroy │ 


