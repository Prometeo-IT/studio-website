
  # Architecture Studio Website Design

  This is a code bundle for Architecture Studio Website Design. The original project is available at https://www.figma.com/design/kfuA1te1fifi5KppU1TkrX/Architecture-Studio-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ### Mobile testing with Cloudflare Tunnel

  To test the dev build on your phone, run:

  ```bash
  npm run dev:tunnel
  ```

  This starts the dev server and exposes it at a public `*.trycloudflare.com` URL (the `cloudflared` binary is installed automatically on first run). Open the printed URL on your phone to test. HMR may not work over the tunnel; refresh the page to see changes.
