import './AccessibilityTestPage.css';

const AccessibilityTestPage = () => {
    return (
        <div className="accessibility-test-page">
            <header className="accessibility-header">
                <h1>Accessibility Test Page</h1>
                <nav>
                    <ul className="accessibility-nav">
                        <li><a href="#main-content">Skip to Main Content</a></li>
                        <li><a href="#navigation">Navigation</a></li>
                        <li><a href="#footer">Footer</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content" className="accessibility-main">
                <section aria-labelledby="section1-heading">
                    <h2 id="section1-heading">Accessible Section</h2>
                    <p>This section contains properly labeled content for screen readers.</p>
                    <img src="image.jpg" alt="Description of the image" />
                </section>

                <section aria-labelledby="section2-heading">
                    <h2 id="section2-heading">Section with Issues</h2>
                    <p>This section has some accessibility issues.</p>
                    {/* Missing alt attribute */}
                    <img src="image.jpg" />
                    {/* Button without accessible label */}
                    <button onClick={() => alert('Button clicked!')}>Click Me</button>
                </section>

                <section aria-labelledby="section3-heading">
                    <h2 id="section3-heading">Forms</h2>
                    <form action="#" method="post">
                        <div>
                            {/* Input without label */}
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            {/* Input without label */}
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </section>

                <section aria-labelledby="section4-heading">
                    <h2 id="section4-heading">Additional Issues</h2>
                    <p>Here we introduce more accessibility mistakes.</p>
                    {/* Non-descriptive link text */}
                    <a href="https://example.com">Click here</a>
                    {/* Missing form fieldset and legend */}
                    <form>
                        <input type="radio" id="option1" name="options" />
                        <label htmlFor="option1">Option 1</label>
                        <input type="radio" id="option2" name="options" />
                        <label htmlFor="option2">Option 2</label>
                    </form>
                    {/* Table without headers */}
                    <table>
                        <tr>
                            <td>Item 1</td>
                            <td>Description 1</td>
                        </tr>
                        <tr>
                            <td>Item 2</td>
                            <td>Description 2</td>
                        </tr>
                    </table>
                </section>
            </main>

            <footer id="footer" className="accessibility-footer">
                <p>&copy; 2024 Accessibility Test Page</p>
                {/* Empty link */}
                <a href="#"></a>
            </footer>
        </div>
    );
};

export default AccessibilityTestPage;
