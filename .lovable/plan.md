# Interactive U.S. Aluminum Capacity Map

## Build
- Make the U.S. map more compact and add smooth cursor-centered touchpad/wheel zoom, drag-to-pan, zoom controls, and reset.
- Keep state borders visible while zooming so users can inspect individual states; preserve site selection and links.
- Add a clear state/site readout and prevent map gestures from scrolling or zooming the whole page.

## Facility coverage
- Expand the database with publicly verifiable U.S. facilities that melt/remelt, cast, refine, or industrially sort aluminum at meaningful scale, including more western and central states.
- Use the uploaded national facility list as a starting point, then validate status, location, products, and capacity against public sources.
- Exclude ordinary scrap yards from production totals; distinguish operating, construction, idled, and closed sites so inactive capacity is not presented as current production.

## Capacity summary
- Store a normalized annual-capacity value when a plant-specific public figure exists, while retaining the original public wording and source.
- Show separate Smelters and Recyclers summaries with site counts and known annual capacity; label totals as known public capacity and never infer missing figures.
- Recalculate summaries with the map filters and make clear that construction, idled, and closed capacity is excluded from operating totals.

## Verification
- Check the database records for duplicates and unsupported claims.
- Test touchpad zoom, pan, reset, state visibility, filters, facility details, summaries, desktop, and mobile layouts in the live preview.
