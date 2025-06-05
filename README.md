# BIM Viewer for Google Docs

## 🚀 Overview

This project aims to develop a BIM (Building Information Modeling) viewer integrated directly into Google Docs. It will allow users to embed and interact with 3D models from `.ifc` files stored in Google Drive, leveraging the power and efficiency of the [ThatOpen/engine_fragment](https://github.com/ThatOpen/engine_fragment) library.

The goal is to provide a seamless experience for viewing and navigating BIM models within the familiar Google Docs environment, enhancing collaboration and accessibility for architectural, engineering, and construction (AEC) professionals.

## ✨ Key Features (Planned)

*   **Google Docs Integration:** Embed a BIM viewer as an add-on or through Google Apps Script.
*   **Google Drive Connectivity:** Load `.ifc` files directly from Google Drive share links pasted into a Google Doc.
*   **High-Performance Viewing:** Utilize the `fragments` library for efficient rendering and navigation of large BIM models.
*   **IFC File Support:** Parse and display industry-standard `.ifc` files.
*   **Interactive Navigation:** Allow users to pan, zoom, and orbit 3D models.
*   **(Future) Element Inspection:** Click on model elements to view their properties.
*   **(Future) Basic Measurement Tools:** Simple distance and area measurements.

## 🛠️ Technology Stack

*   **Core BIM Engine:** [ThatOpen/engine_fragment](https://github.com/ThatOpen/engine_fragment)
    *   Open-source library for storing, displaying, and navigating BIM data.
    *   Uses an efficient binary format based on Google FlatBuffers.
    *   Provides a high-performance 3D viewer built on Three.js.
    *   Includes an `IfcImporter` for converting `.ifc` files.
*   **Platform:** Google Workspace
    *   Google Docs: For embedding the viewer and user interaction.
    *   Google Drive: For storing and accessing `.ifc` files.
    *   Google Apps Script: For backend logic and integration.
*   **Frontend:** HTML, CSS, JavaScript/TypeScript (as required by Google Workspace add-ons and `fragments` library).

## ⚙️ How It Works (Conceptual)

1.  **File Linking:** A user pastes a Google Drive share link for an `.ifc` file into their Google Document.
2.  **Link Detection:** The Google Docs add-on/script identifies the link.
3.  **File Retrieval & Processing:**
    *   The add-on fetches the `.ifc` file from Google Drive using appropriate Google APIs.
    *   The `IfcImporter` from the `fragments` library processes the `.ifc` data client-side (or server-side via Apps Script if necessary for larger files) and converts it into the Fragments format.
4.  **Model Rendering:**
    *   The `fragments` 3D engine initializes within an iframe or a sidebar in Google Docs.
    *   The processed model data is loaded into the engine for interactive viewing.
5.  **User Interaction:** Users can navigate the 3D model using standard mouse controls (pan, zoom, orbit).

## 📈 Project Status

*   **Phase:** Conceptualization & Planning
*   **Next Steps:**
    *   Set up Google Workspace add-on development environment.
    *   Experiment with `fragments` library for basic IFC loading and display.
    *   Develop Google Drive API integration for file fetching.

## 🚀 Getting Started (Development - Placeholder)

Detailed setup instructions will be added once the initial development framework is established. Potential prerequisites include:

*   Node.js and npm/yarn
*   Google Cloud Project setup for Google Workspace APIs
*   Familiarity with Google Apps Script or Google Workspace Add-on SDK

## 🔮 Future Enhancements

*   Advanced model interaction (e.g., sectioning, hiding/isolating elements).
*   Display of element properties and metadata.
*   Support for annotations and markups.
*   Real-time collaboration on model viewing.
*   Offline access capabilities (if feasible).

## 🙏 Acknowledgements

This project heavily relies on the excellent open-source work done by the creators of the **ThatOpen/engine\_fragment** library. Their efforts in providing an efficient and accessible BIM toolkit are greatly appreciated.
*   [ThatOpen/engine_fragment GitHub Repository](https://github.com/ThatOpen/engine_fragment)
*   [Fragments Documentation & Demo](https://ifcjs.github.io/fragment/example)

---

*This README is a living document and will be updated as the project progresses.* 