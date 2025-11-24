interface HomePageProps {
  onOpenWaitlist: () => void;
  onOpenVideo: () => void;
}

export default function HomePage({
  onOpenWaitlist,
  onOpenVideo,
}: HomePageProps) {
  return (
    <div className="home-page">
      {/* CTA Hero Section */}
      <section className="cta-hero">
        <h2 className="cta-tagline">
          The creative studio that turns ideas into launch-ready visuals
        </h2>
        <p className="cta-description">
          A continuous loop of iteration where each output improves with every
          generation.
        </p>
        <div className="cta-buttons">
          <button onClick={onOpenWaitlist} className="btn btn-primary">
            Join the Waitlist
          </button>
          <button onClick={onOpenVideo} className="btn btn-secondary">
            <span>▶</span> Watch Demo
          </button>
        </div>
      </section>

      {/* What You Can Create */}
      <section>
        <div className="section-header">
          <h2>What you can create in minutes</h2>
          <p>
            Generate storyboards, images, and videos with integrated AI models.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Storyboard Generator</h3>
            <ul>
              <li>Rhythm-based pacing presets</li>
              <li>Multi-shot sequence support</li>
              <li>Sora 2 and Veo 3 integration</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Image Generation</h3>
            <ul>
              <li>Nano Banana / Nano Banana Pro, GPT-Image</li>
              <li>Text or image editing modes</li>
              <li>1K–4K, 10 aspect ratios</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Video Generation</h3>
            <ul>
              <li>Text-to-video or image input</li>
              <li>8s, 10s or 15s clips, two ratios</li>
              <li>Optional watermark removal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Overview Table */}
      <section>
        <div className="section-header">
          <h2>Feature overview</h2>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>Highlights</th>
                <th>Who Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LoopAI Assistant</td>
                <td>
                  Six specialist personas. Works alongside creation tools.
                </td>
                <td>Founders, marketers, creative leads</td>
              </tr>
              <tr>
                <td>Prompt Builder & Wizard</td>
                <td>Templates, checkboxes, and guided product prompts.</td>
                <td>E-commerce, solo operators</td>
              </tr>
              <tr>
                <td>Dashboard</td>
                <td>Asset gallery, metadata tracking</td>
                <td>Teams tracking experiments</td>
              </tr>
              <tr>
                <td>Image Editor</td>
                <td>Crop, background removal, graphics layers.</td>
                <td>Design polish without context switching</td>
              </tr>
              <tr>
                <td>Settings</td>
                <td>API keys, credits, usage analytics.</td>
                <td>Budget owners, admins, VAs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <h2>The premium way to stop the scroll.</h2>
      </section>

      {/* Why Teams Join */}
      <section>
        <div className="section-header">
          <h2>Why teams join</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <p>Priority access to the latest AI models at lower cost</p>
          </div>
          <div className="benefit-card">
            <p>Conversion-focused workflows for brands and content teams</p>
          </div>
          <div className="benefit-card">
            <p>Integrated editor and dashboard to keep the best iterations</p>
          </div>
          <div className="benefit-card">
            <p>Live credit tracking and model-by-model spend visibility</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-bottom">
        <h3>Join the early access waitlist</h3>
        <p>
          Create storyboards, generate images and videos, and polish assets in
          one place.
        </p>
        <div className="cta-buttons">
          <button onClick={onOpenWaitlist} className="btn btn-primary">
            Join the Waitlist
          </button>
          <button onClick={onOpenVideo} className="btn btn-secondary">
            <span>▶</span> Watch Demo
          </button>
        </div>
      </section>
    </div>
  );
}
