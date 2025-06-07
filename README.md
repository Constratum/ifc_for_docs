# BIM Viewer for Google Docs

## 🚀 Overview

This project is a BIM (Building Information Modeling) viewer integrated directly into Google Docs as a Workspace Add-on. It allows users to load local `.ifc` files, navigate the 3D model, and copy snapshots into their documents, leveraging the power and efficiency of the [ThatOpen/engine_fragment](https://github.com/ThatOpen/engine_fragment) library.

The goal is to provide a seamless experience for viewing and capturing BIM models within the familiar Google Docs environment, enhancing documentation and collaboration for architectural, engineering, and construction (AEC) professionals.

## ✨ Features

### Implemented
*   **Google Docs Integration:** Runs as a modern Google Workspace Add-on with a clean, dialog-based UI.
*   **Local IFC File Support:** Automatically parses and displays `.ifc` files selected from the user's local machine.
*   **High-Performance Viewing:** Utilizes `@thatopen/fragments` for model processing and `@thatopen/components` for the basic scene, camera, and renderer setup.
*   **Interactive Navigation:** Allows users to pan, zoom, and orbit 3D models within the viewer dialog.
*   **Snapshot to Clipboard:** Users can capture the current view of the model and copy it to their clipboard as an image, ready to be pasted into the document.

### (Future) Planned Features
*   **(Next Up) Google Drive Integration:** Load `.ifc` files directly from Google Drive share links.
*   **Advanced Navigation Tools:** Implement viewer tools from `@thatopen/components`, like "fit to view" and creating section planes, once they are fully compatible with the latest fragments library.
*   **Element Inspection:** Click on model elements to view their properties.
*   **Basic Measurement Tools:** Simple distance and area measurements.
*   **Advanced model interaction:** Sectioning, hiding/isolating elements, annotations.

## 🛠️ Technology Stack

*   **Core BIM Engine:** [ThatOpen/engine_fragment](https://github.com/ThatOpen/engine_fragment)
    *   `@thatopen/fragments` for IFC import and model management.
    *   `@thatopen/components` for scene setup, rendering, and future tooling.
*   **Platform:** Google Workspace
    *   Google Docs Add-on framework.
    *   Google Apps Script for backend logic and UI management.
*   **Frontend:** HTML, CSS, and modern JavaScript (ESM) loaded via CDN.
*   **Development:** `clasp` for local development and deployment.

## ⚙️ How It Works (Current)

1.  **Launch Add-on:** The user opens the "BIM Viewer" from the Google Docs add-on menu.
2.  **Load Model:** A dialog window appears. The user selects a local `.ifc` file, which is then automatically loaded into the interactive 3D viewer.
3.  **Navigate & Position:** The user navigates the 3D model using standard mouse controls (pan, zoom, orbit) to find the desired viewpoint.
4.  **Capture Snapshot:** The user clicks the "Copy Snapshot to Clipboard" button.
5.  **Paste:** A PNG image of the current view is copied to the user's clipboard, ready to be pasted directly into the Google Document.

## 📈 Project Status

*   **Phase:** **Version 1.0 Complete (Local File POC)**
*   **Next Steps:**
    *   Implement Google Drive API integration to allow loading `.ifc` files from a URL.
    *   Add more robust error handling and user feedback.

## 🚀 Getting Started (Manual Installation)

Since this add-on is not yet on the Google Workspace Marketplace, you can install it manually for your own use by following these steps.

### Part 1: Create the Apps Script Project

1.  Go to [script.google.com](https://script.google.com/home) and click **New project**.
2.  Delete the boilerplate code inside the `Code.gs` file. Copy the contents of this repository's `google-apps-script/Code.gs` file and paste it into the editor's `Code.gs` file.
3.  Click the **+** icon next to "Files" and select **HTML**. Name the new file `Sidebar.html` (including the `.html` extension) and click OK. Delete the boilerplate code, then copy and paste the contents of this repository's `google-apps-script/Sidebar.html` into your new `Sidebar.html` file.
4.  Repeat the process: create another HTML file named `main.js.html`. Copy and paste the contents from this repository's `google-apps-script/main.js.html`.
5.  Click the **Project Settings** (gear icon) on the left. Check the box for **"Show `appsscript.json` manifest file in editor"**.
6.  Return to the **Editor** ( `<>` icon). Click on the `appsscript.json` file. Delete its contents and replace them with the contents of this repository's `google-apps-script/appsscript.json`.
7.  Click **Save project**.

### Part 2: Configure Google Cloud & Permissions

This is required so Google knows you are giving the script permission to run.

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project. Give it any name you like.
2.  Once the project is created, find and copy its **Project Number** from the "Project info" card on the main dashboard.
3.  In the Google Cloud Console, navigate to **APIs & Services** > **OAuth consent screen**.
4.  Choose **External** for the User Type and click **Create**.
5.  On the next page, provide an **App name** (e.g., "My BIM Viewer"), a **User support email** (your own email), and your email again for the **Developer contact information**. Click **SAVE AND CONTINUE**.
6.  Skip the "Scopes" page by clicking **SAVE AND CONTINUE**.
7.  On the "Test users" page, click **+ ADD USERS** and add your own Google email address. Click **ADD**, then **SAVE AND CONTINUE**.
8.  Go back to your Apps Script project. Click **Project Settings** (gear icon).
9.  Scroll down to "Google Cloud Platform (GCP) Project" and click **Change project**.
10. Paste the GCP **Project Number** you copied earlier and click **Set project**.

### Part 3: Use the Add-on

1.  Open any Google Doc (or refresh one you already have open).
2.  A new "BIM Viewer" menu should appear in the main menu bar.
3.  Click **BIM Viewer** > **Launch**. The first time, it will ask for authorization. Accept the permissions you configured.
4.  The viewer dialog will appear, ready to use!

## 🙏 Acknowledgements

This project heavily relies on the excellent open-source work done by the creators of the **ThatOpen/engine_fragment** library. Their efforts in providing an efficient and accessible BIM toolkit are greatly appreciated.
*   [ThatOpen/engine_fragment GitHub Repository](https://github.com/ThatOpen/engine_fragment)
*   [ThatOpen Docs & Tutorials](https://docs.thatopen.com/)

---

*This README is a living document and will be updated as the project progresses.* 