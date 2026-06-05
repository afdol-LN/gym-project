# GymTracker Project Roadmap & Implementation Details

## Phase 1: Foundation (Done)
- Workspace initialized at `D:/gym-project/backend/`.
- Schema, Seed, and NestJS entry points created.

## Phase 2: Backend API & Logic (Implementation Snippets)

### 2.1 Exercise Module
- `backend/src/exercises/exercises.service.ts`: CRUD logic using `prisma.exercise`.
- `backend/src/exercises/exercises.controller.ts`: REST endpoints (GET, POST, PATCH, DELETE).

### 2.2 Workout Generation Logic
- `backend/src/workout/workout.service.ts`: 
```typescript
async getDailyWorkout(dayOfWeek: number) {
  return this.prisma.daySchedule.findMany({ 
    where: { dayOfWeek }, 
    include: { exercise: true } 
  });
}
```

### 2.3 Double Progression Algorithm
- `backend/src/analytics/overload.service.ts`: Logic to check last `WorkoutLog` for an exercise and calculate +2.5kg if max reps achieved.

---

## Phase 3: Frontend (React + Vite)

**Initialize:**
`npm create vite@latest frontend -- --template react-ts`

**Core Components:**
- `DailyWorkout.tsx`: Maps schedule to exercise cards.
- `YouTubePlayer.tsx`: Wraps `iframe` with `youtubeId`.
- `SetLogger.tsx`: Inputs for weight/reps with `onSave` handler.

---

## Phase 4: Analytics & Deployment

**Dashboard:**
- Use `recharts` for visualization.
- `HistoryService` queries `WorkoutSession` + `WorkoutLog` joined by `exerciseId`.

**Deployment Checklist:**
1. **Supabase:** Configure Environment Variables in Vercel/Render.
2. **Backend:** Render/Koyeb Service pointing to `backend/`.
3. **Frontend:** Vercel Project linked to `frontend/`.
4. **Build:** `npm run build` in both directories.

---

**Next Steps for you:**
1. Complete `npm install` and `prisma migrate dev`.
2. Configure your `.env` (Supabase URL).
3. Let me know which specific module you want to flesh out first, and I will generate the full functional code blocks.
