export function ProductWindow() {
  return (
    <div className="appwin" aria-label="Lane product preview">
      <div className="appbar"><span className="lights"><i></i><i></i><i></i></span><span className="ctx"><b>Acme Design</b> &middot; Consumer app &middot; Active requests</span><span className="appstat"><i className="sdot"></i>live</span></div>
      <div className="appbody">

        {/* LEFT: nav */}
        <aside className="sidebar">
          <div className="ws"><span className="wsicon">A</span><span className="wsname">Acme Design</span><span className="plan">PRO</span></div>
          <div className="search">Search<span className="k">&#8984;K</span></div>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>Home</a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18v12H3zM3 7l9 7 9-7" /></svg>Inbox<span className="ct">3</span></a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>My requests<span className="ct">4</span></a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>Submitted by me</a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c.6.6 1 1.4 1 2h6c0-.6.4-1.4 1-2A7 7 0 0 0 12 2z" /></svg>Ideas</a>
          <div className="zone-lbl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg> Consumer app</div>
          <a className="navitem active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>Active requests<span className="ct">8</span></a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v6H4zM4 14h16v6H4z" /></svg>Intake<span className="ct">5</span></a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7" /></svg>Commitments</a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21 8 14 2 9.4h7.6z" /></svg>Prove<span className="dot-r"></span></a>
          <a className="navitem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18v13H3zM3 7l2-3h14l2 3M9 12h6" /></svg>Archive</a>
          <div className="zone-lbl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg> Payments</div>
          <div className="sb-spacer"></div>
          <div className="sb-user"><span className="av">M</span><span><span className="nm">Maya</span> <span className="rl">&middot; designer</span></span></div>
        </aside>

        {/* CENTER: request list */}
        <section className="listpane">
          <div className="lp-head">
            <h4>Active requests <span className="cnt">8</span></h4>
            <div className="filters"><span className="f on">All</span><span className="f">Predesign</span><span className="f">Design</span><span className="f">Build</span><span className="f">Track</span></div>
          </div>
          <div className="lp-scroll">
            <div className="lrow sel">
              <div className="lt">Users can&rsquo;t find recent work fast enough &mdash; re-entry costs them time on every visit.</div>
              <div className="lm"><span className="ph">Design &middot; Diverge</span><span className="av">M</span><span className="lid">REQ-128</span></div>
            </div>
            <div className="lrow">
              <div className="lt">New members can&rsquo;t tell which team owns an incoming request.</div>
              <div className="lm"><span className="ph">Design &middot; Frame</span><span className="av">S</span><span className="lid">REQ-131</span></div>
            </div>
            <div className="lrow">
              <div className="lt">Checkout drop-off spikes for people on slow connections.</div>
              <div className="lm"><span className="ph">Design &middot; Converge</span><span className="av">A</span><span className="lid">REQ-124</span></div>
            </div>
            <div className="lrow">
              <div className="lt">People miss the weekly digest because it blends into other email.</div>
              <div className="lm"><span className="ph">Build</span><span className="av">M</span><span className="lid">REQ-119</span></div>
            </div>
            <div className="lrow">
              <div className="lt">Onboarding completion drops sharply after step 3.</div>
              <div className="lm"><span className="ph">Design &middot; Sense</span><span className="av">S</span><span className="lid">REQ-127</span></div>
            </div>
            <div className="lrow">
              <div className="lt">Search returns stale results right after an edit.</div>
              <div className="lm"><span className="ph">Track</span><span className="av">A</span><span className="lid">REQ-115</span></div>
            </div>
            <div className="lrow">
              <div className="lt">Returning users lose their place when a session times out.</div>
              <div className="lm"><span className="ph">Design &middot; Diverge</span><span className="av">M</span><span className="lid">REQ-112</span></div>
            </div>
          </div>
        </section>

        {/* RIGHT: rich detail */}
        <section className="detail">
          <p className="crumb">Consumer app &middot; Active requests &middot; <b>REQ-128</b></p>
          <div className="phasetabs"><span className="pt">Predesign</span><span className="pt active">Design</span><span className="pt">Build</span><span className="pt">Track</span></div>
          <h2 className="dtitle">Users can&rsquo;t find recent work fast enough &mdash; re-entry costs them time on every visit.</h2>
          <span className="provenance"><b>&#8634; Reframed</b> from a solution by intake check &middot; <s>&ldquo;Add a filter dropdown to the dashboard&rdquo;</s></span>

          <div className="metastrip">
            <div className="ms"><span className="k">Designer owner</span><span className="v"><span className="av sm">M</span>Maya</span></div>
            <div className="ms"><span className="k">Requester</span><span className="v"><span className="av sm">S</span>Sachin &middot; PM</span></div>
            <div className="ms"><span className="k">Guests</span><span className="v">1 &middot; research</span></div>
            <div className="ms"><span className="k">Stage</span><span className="v brand">Diverge</span></div>
            <div className="ms"><span className="k">Cycle</span><span className="v">Q3 &middot; committed</span></div>
          </div>

          <div className="block"><div className="blabel">Context brief &middot; AI</div><p className="brief">Re-entry friction concentrates on returning users who left mid-task. The underlying need is recent-work recall, not filtering. Two prior requests touched dashboard navigation; neither addressed recency. Recommend exploring persistent recall over query-based retrieval.</p></div>
          <div className="block"><div className="blabel">Design stages</div><div className="stages"><span className="st done">Sense</span><span className="ln done"></span><span className="st done">Frame</span><span className="ln done"></span><span className="st cur">Diverge</span><span className="ln"></span><span className="st">Converge</span><span className="ln"></span><span className="st">Prove</span></div></div>
          <div className="block"><div className="blabel">Decision log</div><div className="dl">
            <div className="dlrow"><span className="dlh">Surface recent items in a persistent rail, not a filter</span><span className="dlm">Maya &middot; 1d ago</span><p>A filter still assumes the user knows what to look for. A recency rail removes the search entirely for the common case.</p></div>
            <div className="dlrow"><span className="dlh">Scope to the last 10 items, no settings</span><span className="dlm">Maya &middot; 2d ago</span><p>Configurability would reintroduce the decision we&rsquo;re trying to remove.</p></div>
          </div></div>
          <div className="block"><div className="blabel">Iterations &middot; Figma</div><div className="iters"><div className="iter"><div className="thumb"></div>v3 &middot; current</div><div className="iter"><div className="thumb"></div>v2</div><div className="iter"><div className="thumb"></div>v1</div></div></div>
          <div className="block"><div className="blabel">Prove &middot; three sign-offs</div><div className="signoffs">
            <span className="so ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Designer</span>
            <span className="so">Design head &middot; pending</span>
            <span className="so">PM &middot; pending</span>
          </div></div>
        </section>

      </div>
      <div className="appfoot"><span className="af-l"><i className="af-dot"></i>connected &middot; acme-design &middot; 8 active &middot; synced 0.4s ago</span><span className="af-r">14:23:07</span></div>
    </div>
  );
}
