# L61 Wiring Bench

A dependency-free, local-first wiring planner for routing a Gen 1 L61 engine harness through a 32-position round firewall connector to a uaEFI ECU and cabin-side power/control circuits.

## Run it

Open `index.html` directly, or serve the directory locally:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## What it does

- Seeds the proposed 24-circuit firewall layout and six cabin-only accelerator-pedal circuits.
- Shows the cabin-only B107 accelerator pedal routes explicitly from uaEFI Molex C-D cavities to APP cavities 1-6.
- Includes the eight-cavity throttle actuator reference and resolves its A-H rows to the project's live uaEFI and bulkhead assignments.
- Uses the labeled panel-receptacle face with large cavities `1-4` and signal cavities `a-i`, `k-n`, `p`, `r-w`, and `aa-hh` (`j`, `o`, and `q` do not exist).
- Groups uaEFI routes by Molex connectors A-D and highlights the linked physical cavity.
- Includes documented uaEFI pin functions and pigtail colors from the official rusEFI pinout.
- Labels each route card with its assigned bulkhead cavity and draws both sides of every assigned route over the connector image.
- Emphasizes the selected route and its cavity label while muting the other paths for readability.
- Supports drag-to-connect and click-to-connect workflows.
- Edits route names, endpoint labels, pin/cavity IDs, wire color, gauge, notes, and verification state.
- Checks routes off from the board or checklist.
- Saves automatically in browser `localStorage`.
- Imports and exports the full project as JSON.
- Prevents two circuits from occupying the same bulkhead cavity.
- Migrates version 4 projects from numeric positions to the corresponding named signal cavities; former positions 29-32 become large cavities `1-4`.

## Important

The seed data is a planning aid, not a verified construction pinout. Only uaEFI B8 for fan control and a few stock ICM wire colors were identified in the source discussion. The connector overlay uses the panel-receptacle face with the key at the top. Verify that orientation, every uaEFI and GM cavity, wire color, contact current rating, and circuit by authoritative documentation and continuity testing before energizing the harness.
