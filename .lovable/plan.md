# Move the marketing design to its correct route

## Changes
- Move the existing Anni digital marketing page from `/` to `/digital-marketing` without changing its visual design.
- Add a separate minimal homepage at `/` so the digital marketing page is no longer treated as the homepage.
- Update page-specific titles and social metadata for both routes.
- Preserve the existing responsive styling and verify both URLs load correctly.

## Technical details
- Create `src/routes/digital-marketing.tsx` with `createFileRoute("/digital-marketing")`.
- Replace `src/routes/index.tsx` with a distinct homepage route.
- Keep shared document setup in the root route and allow route generation to update automatically.
