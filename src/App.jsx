const App = () => (
  <>
    {window.HomeHero && <window.HomeHero />}
    {window.HomeArchitecture && <window.HomeArchitecture />}
    {window.HomeServices && <window.HomeServices />}
    {window.HomeReviews && <window.HomeReviews />}
    {window.HomeBlog && <window.HomeBlog />}
    {window.HomeCTA && <window.HomeCTA />}
    {window.Footer && <window.Footer />}
  </>
);

export default App;
