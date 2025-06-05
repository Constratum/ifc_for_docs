# Development Plan: BIM Viewer for Google Docs

This document outlines the phased development plan for creating a BIM viewer integrated into Google Docs, utilizing the `ThatOpen/engine_fragment` library and Google Drive for file storage.

## Guiding Principles

*   **Iterative Development:** Build and test features incrementally.
*   **Focus on Core Functionality First:** Prioritize getting a basic end-to-end workflow operational.
*   **Leverage Existing Libraries:** Maximize the use of `engine_fragment` and Google Workspace APIs.
*   **User-Centric:** Keep the end-user experience in mind throughout development.

---

## Phase 1: Setup & Basic Proof of Concept (POC)

**Goal:** Verify the core functionality of loading and displaying an IFC model using the `fragments` library in a standalone environment, and set up the Google Workspace development environment.

**Tasks:**

1.  **Set up Google Workspace Add-on Development Environment:**
    *   Create a new Google Cloud Project.
    *   Enable necessary APIs (Google Drive API, Google Workspace Add-ons API, etc.).
    *   Configure OAuth consent screen.
    *   Install `clasp` (Command Line Apps Script Projects) or set up the Apps Script online editor.
2.  **`fragments` Library Familiarization & Local POC:**
    *   Clone or install the `ThatOpen/engine_fragment` library.
    *   Create a simple HTML page.
    *   Integrate the `fragments` library into this page.
    *   Write JavaScript to load a local sample `.ifc` file using `IfcImporter`.
    *   Render the model in a 3D canvas using the `fragments` viewer.
    *   Test basic interaction (zoom, pan, orbit).
3.  **Research Google Docs Add-on UI Options:**
    *   Investigate how to display custom UI in Google Docs (Sidebars, Dialogs).
    *   Understand communication between the add-on and the embedded UI (e.g., `iframe` sandboxing, `HtmlService`).

**Deliverables:**

*   A functioning local HTML page that loads and displays an `.ifc` model using `fragments`.
*   A basic Google Workspace Add-on project structure.
*   Understanding of how to present the viewer in Google Docs.

---

## Phase 2: Google Drive Integration

**Goal:** Enable the system to fetch `.ifc` files from Google Drive using share links.

**Tasks:**

1.  **Implement Google Drive API Authentication (OAuth2):**
    *   Set up OAuth 2.0 for the Google Workspace Add-on.
    *   Handle the OAuth flow for user authorization to access their Drive.
2.  **Develop File Fetching Logic:**
    *   Write Apps Script functions to take a Google Drive share link as input.
    *   Use the Google Drive API to resolve the link to a file ID.
    *   Fetch the `.ifc` file content (as a blob or byte array).
    *   Handle permissions and error scenarios (e.g., file not found, access denied).
3.  **Connect Drive Fetching to `fragments` Importer (POC):**
    *   Modify the local POC from Phase 1 to accept file data (e.g., as a `Blob` or `ArrayBuffer`) instead of a local path.
    *   Pass the data fetched from Google Drive (simulated or actual if feasible in a local test) to the `IfcImporter`.

**Deliverables:**

*   Apps Script functions capable of fetching `.ifc` file content from Google Drive given a share link.
*   Successful loading of a Drive-hosted `.ifc` file into the `fragments` viewer in the local POC environment.

---

## Phase 3: Google Docs Add-on Core Development

**Goal:** Integrate the viewer into a Google Docs Add-on, allowing users to trigger model loading from a link in the document.

**Tasks:**

1.  **Design Add-on User Interface (UI):**
    *   Decide on using a sidebar or dialog for the viewer.
    *   Create the HTML structure for the add-on UI.
2.  **Implement Link Detection/Input:**
    *   Provide a way for the user to specify the `.ifc` file link (e.g., automatically detect links in the document, or provide an input field in the add-on UI).
3.  **Embed `fragments` Viewer in Add-on:**
    *   Set up the `HtmlService` in Apps Script to serve the viewer HTML/JS.
    *   Ensure the `fragments` library and its dependencies are correctly loaded within the add-on's sandboxed environment.
4.  **Orchestrate Data Flow:**
    *   When a link is provided/detected, the Apps Script backend calls the Drive fetching logic (from Phase 2).
    *   Pass the fetched file data from Apps Script to the client-side viewer UI (e.g., using `google.script.run` or postMessage if using an iframe directly).
    *   The client-side JavaScript initializes the `fragments` viewer with the received data.
5.  **Basic Error Handling & User Feedback in Add-on:**
    *   Display loading indicators.
    *   Show messages for errors (e.g., invalid link, file loading failed).

**Deliverables:**

*   A functional Google Docs Add-on that can:
    *   Accept a Google Drive link to an `.ifc` file.
    *   Fetch the file from Drive.
    *   Display the 3D model using `fragments` within the Docs UI.

---

## Phase 4: Viewer Features & Refinement

**Goal:** Enhance the viewer's usability and robustness.

**Tasks:**

1.  **Implement Standard Navigation Controls:**
    *   Ensure smooth pan, zoom, and orbit controls are intuitive.
    *   Consider adding reset view / fit-to-screen functionality.
2.  **Performance Optimization:**
    *   Test with various `.ifc` file sizes.
    *   Identify and address any performance bottlenecks in loading or rendering.
    *   Consider strategies for handling very large models (e.g., progressive loading, though this might be complex with the current `fragments` setup).
3.  **Improve Error Handling and Logging:**
    *   More granular error messages.
    *   Client-side and server-side (Apps Script) logging for easier debugging.
4.  **Code Cleanup and Documentation:**
    *   Refactor code for clarity and maintainability.
    *   Add inline comments and document key functions/modules.
5.  **UI/UX Polish:**
    *   Improve the visual design and user experience of the add-on.

**Deliverables:**

*   A more polished and robust viewer with good performance and clear user feedback.
*   Well-organized and documented codebase.

---

## Phase 5: Advanced Features (Future Scope / Stretch Goals)

**Goal:** Add value beyond basic viewing.

**Tasks (to be prioritized based on feedback and feasibility):**

1.  **Element Inspection:**
    *   Implement raycasting to select model elements.
    *   Display basic properties of the selected element (e.g., IFC type, Name, GlobalId).
2.  **Basic Measurement Tools:**
    *   Simple point-to-point distance measurement.
3.  **Sectioning Tools:**
    *   Allow users to create section planes to view model internals (if supported easily by `fragments`).
4.  **User Settings/Preferences:**
    *   E.g., viewer background color, navigation sensitivity.

**Deliverables:**

*   Implementation of selected advanced features.

---

## Phase 6: Testing & Deployment

**Goal:** Ensure the add-on is ready for users and potentially publish it.

**Tasks:**

1.  **Comprehensive Testing:**
    *   Test across different browsers (Chrome, Firefox, Safari, Edge).
    *   Test with a variety of `.ifc` files (different versions, sizes, complexities).
    *   Test various Google Docs scenarios (e.g., multiple users, different document types).
    *   Usability testing with target users.
2.  **Security Review:**
    *   Ensure data handling is secure, especially with Google Drive access.
    *   Adhere to Google Workspace add-on security best practices.
3.  **Prepare for Deployment:**
    *   Create add-on listing materials (icons, descriptions, screenshots).
    *   Follow Google Workspace Marketplace submission guidelines (if applicable).
4.  **Deployment:**
    *   Publish the add-on privately or publicly.

**Deliverables:**

*   A thoroughly tested and secure BIM viewer add-on.
*   (If applicable) A published listing on the Google Workspace Marketplace.

---

This development plan is a living document and may be adjusted as the project progresses and new information becomes available. 