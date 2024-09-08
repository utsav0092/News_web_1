<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Application README</title>
</head>
<body>
    <h1>News Application</h1>

<p>This is a simple news application that fetches and displays news articles based on different categories using the News API.</p>

<h2>Overview</h2>
    <p>The application allows users to select different news categories (e.g., general, entertainment, health, science, sports, technology) and view relevant news articles. It fetches data from the News API and dynamically generates news cards for display.</p>

<h2>Features</h2>
    <ul>
        <li>Display news articles with images, titles, descriptions, and links to read more.</li>
        <li>Filter news by different categories.</li>
        <li>Default view shows general news.</li>
    </ul>

<h2>Getting Started</h2>
    <p>To run this application locally, follow these steps:</p>

<h3>Prerequisites</h3>
    <ul>
        <li>Ensure you have a modern web browser.</li>
        <li>No additional software is required.</li>
    </ul>

<h3>Setup</h3>
    <ol>
        <li><strong>Clone the Repository</strong>
            <pre><code>git clone &lt;repository-url&gt;</code></pre>
        </li>
        <li><strong>Open the Project</strong>
            <p>Navigate to the project directory and open <code>index.html</code> in your web browser.</p>
        </li>
    </ol>

<h2>API Key</h2>
    <p>The application uses the News API to fetch news articles. You need to replace the placeholder API key with your own.</p>
    <ul>
        <li><strong>API Key:</strong> 551e39ceccaf4ae1b77164b8f887a188</li>
    </ul>

<h2>Code Explanation</h2>

<h3>1. Initialization and Constants</h3>
    <p>Sets up necessary constants and variables, including the API key and DOM elements for displaying news. Defines a list of news categories and a country code (India).</p>

<h3>2. Creating the User Interface</h3>
    <p><code>generateUI</code> function: Generates and displays news cards based on fetched data. Each card includes an image, title, description, and a link to read more.</p>

<h3>3. Fetching News Data</h3>
    <p><code>getNews</code> function: Fetches news data from the API and updates the UI with the articles. It handles any errors by alerting the user if the data is unavailable.</p>

<h3>4. Category Selection</h3>
    <p><code>selectCategory</code> function: Updates the request URL based on the selected category and fetches news articles accordingly. Highlights the active category button.</p>

<h3>5. Creating Category Buttons</h3>
    <p><code>createOptions</code> function: Generates category buttons and sets the default category button to active.</p>

<h3>6. Initialization</h3>
    <p><code>init</code> function: Initializes the application by clearing existing buttons, fetching news for the default category, and creating category buttons.</p>

<h3>7. Window Onload</h3>
    <p>Sets the initial request URL to fetch general news and initializes the application when the window loads.</p>

<h2>Usage</h2>
    <p>Open the application in your web browser. Click on different category buttons to filter news articles.</p>
</body>
</html>
