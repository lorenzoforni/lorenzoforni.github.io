<style>
/* De-activate the placeholder link’s “always active” styling if present */
a.nav-link[href$="/_pages/dropdown/"]:not(.active) {
  color: inherit !important;
  background: transparent !important;
}
</style>



---
layout: page
permalink: /_pages/dropdown/
nav: true
nav_order: 4
title: Bookshelf
---

<!-- Minimal styles for section headers (same as research.md) -->
<style>
  .projects h2.category {
    cursor: default;
    font-weight: bold;
    font-size: 1.5rem;
  }
  html[data-theme="light"] .projects h2.category {
    color: var(--global-theme-color, #9b59b6) !important;
  }
  html[data-theme="dark"] .projects h2.category {
    color: var(--global-theme-color, #00bcd4) !important;
  }
  .section { margin: 20px 0 30px 0; }
</style>

<!-- Compact spacing between items + card layout -->
<style>
  .book { margin-bottom: 20px; } /* space between the two boxes */
  .book-box {
    display: flex;
    gap: 18px;
    padding: 16px;
    border: 1px solid var(--global-border-color, #ddd);
    border-radius: 8px;
    background: var(--global-card-bg, transparent);
  }
  .book img.cover {
    width: 150px;
    max-width: 150px;
    height: auto;
    flex: 0 0 150px;
    border: 1px solid var(--global-border-color, #eee);
    border-radius: 4px;
  }
  .book .content { line-height: 16pt; }
  .book .title {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 4px;
  }
  .book .pub {
    font-style: italic;
    margin: 4px 0 8px 0;
    display: block;
  }
  .book .desc { margin: 0 0 8px 0; }
  .book .links a {
    margin-right: 12px;
    text-decoration: underline;
  }

  /* Mobile: stack cover over text */
  @media (max-width: 700px) {
    .book-box { flex-direction: column; }
    .book img.cover { width: 180px; max-width: 100%; }
  }
</style>

<div class="projects">
  <h2 class="category">Bookshelf</h2>
</div>

<div id="intro" class="section" style="padding-left:30px; line-height:16pt;">
  <p>
    I am the author of <i>The Magic Money Tree and Other Economic Tales</i> (2021) and
    <i>Preventing the Greenlash – How to Overcome Opposition to Green Policies</i> (2024).
    I’m always happy to exchange ideas about these books—feel free to reach out.
  </p>
</div>

<div id="books" class="section">

  <!-- Preventing the Greenlash (2024) -->
  <div class="book">
    <div class="book-box">
      <img class="cover" src="/assets/img/greenlash.jpg" alt="Cover: Preventing the Greenlash – How to Overcome Opposition to Green Policies">
      <div class="content">
        <div class="title">Preventing the Greenlash – How to Overcome Opposition to Green Policies</div>
        <span class="pub">Agenda Publishing, 2024.</span>
        <p class="desc">
          Politicians stand at a crossroads where the path to green policies is fraught with political risks, as the immediate costs to society may overshadow the profound future benefits. Lorenzo Forni sets out the decisions we need to take to collectively save the world from the ravages of climate catastrophe and how politicians might keep voters on board with the green transition. He shows how reaching the net-zero emissions target to forestall further climatic change cannot be achieved by small changes in individual lifestyles alone, but requires big and brave public policy enacted by governments that is properly financed and economically sound.
        </p>
        <p class="links">
          <a href="https://www.agendapub.com/page/detail/preventing-the-greenlash/?k=9781788217811">Publisher</a>
          <a href="https://www.amazon.com/s?k=Preventing+the+Greenlash">Amazon</a>
        </p>
      </div>
    </div>
  </div>

  <!-- The Magic Money Tree (2021) -->
  <div class="book">
    <div class="book-box">
      <img class="cover" src="/assets/img/magic.jpg" alt="Cover: The Magic Money Tree and Other Economic Tales">
      <div class="content">
        <div class="title">The Magic Money Tree and Other Economic Tales</div>
        <span class="pub">Agenda Publishing, 2021.</span>
        <p class="desc">
          This lively and provocative look at the tension between economics and politics examines why so many mistakes in economic policy-making are made for political reasons and ignore the economic truths. Using short-term economic gains to ensure electoral success, I argue, inevitably spells macroeconomic disaster. Using the state budget, trade policy and monetary policy to prop up labour markets and the wider economy in order to boost voter approval ratings, while ignoring budget constraints can only result in longer recessions and economic downturns. Which then can incur the painful austerity measures needed to bring the economy back into balance. I look at many unsustainable economic policies that have been implemented in parts of the world when the economic realities – there is no magic money tree! – would recommend a different and more prudent economic course.
        </p>
        <p class="links">
          <a href="https://www.agendapub.com/page/detail/the-magic-money-tree-and-other-economic-tales/?k=9781788213646">Publisher</a>
          <a href="https://www.amazon.com/s?k=The+Magic+Money+Tree+and+Other+Economic+Tales">Amazon</a>
        </p>
      </div>
    </div>
  </div>

</div>
