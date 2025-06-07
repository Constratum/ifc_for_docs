# BIM Viewer for Google Docs

## 🚀 Overview

This project is a BIM (Building Information Modeling) viewer integrated directly into Google Docs as a Workspace Add-on. It allows users to load local `.ifc` files, navigate the 3D model, and copy snapshots into their documents, leveraging the power and efficiency of the [ThatOpen/engine_fragment](https://github.com/ThatOpen/engine_fragment) library.

The goal is to provide a seamless experience for viewing and capturing BIM models within the familiar Google Docs environment, enhancing documentation and collaboration for architectural, engineering, and construction (AEC) professionals.

## ✨ Features

### Implemented
*   **Google Docs Integration:** Runs as a modern Google Workspace Add-on with a clean, dialog-based UI.
*   **Local IFC File Support:** Automatically parses and displays `.ifc` files selected from the user's local machine.
*   **High-Performance Viewing:** Utilizes `@thatopen/fragments` and `@thatopen/components` for efficient rendering and navigation of BIM models.
*   **Interactive Navigation:** Allows users to pan, zoom, and orbit 3D models within the viewer dialog.
*   **Snapshot to Clipboard:** Users can capture the current view of the model and copy it to their clipboard as an image, ready to be pasted into the document.

### (Future) Planned Features
*   **(Next Up) Google Drive Integration:** Load `.ifc` files directly from Google Drive share links.
*   **Navigation Tools:** Implement viewer tools like "fit to view" and creating section planes (slices).
*   **Element Inspection:** Click on model elements to view their properties.
*   **Basic Measurement Tools:** Simple distance and area measurements.
*   **Advanced model interaction:** Sectioning, hiding/isolating elements, annotations.

## 🛠️ Technology Stack

*   **Core BIM Engine:** [ThatOpen/engine_fragment](https://github.com/ThatOpen/engine_fragment)
    *   `@thatopen/fragments` for IFC import and model management.
    *   `@thatopen/components` for scene setup and rendering.
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

## 🙏 Acknowledgements

This project heavily relies on the excellent open-source work done by the creators of the **ThatOpen/engine_fragment** library. Their efforts in providing an efficient and accessible BIM toolkit are greatly appreciated.
*   [ThatOpen/engine_fragment GitHub Repository](https://github.com/ThatOpen/engine_fragment)
*   [ThatOpen Docs & Tutorials](https://docs.thatopen.com/)

---

*This README is a living document and will be updated as the project progresses.* 