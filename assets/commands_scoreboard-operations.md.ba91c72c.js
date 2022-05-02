import{_ as e,c as a,o as r,e as o}from"./404.md.def01f99.js";const m='{"title":"Scoreboard Operations","description":"","frontmatter":{"title":"Scoreboard Operations"},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Mathematical Operators","slug":"mathematical-operators"},{"level":3,"title":"Addition","slug":"addition"},{"level":3,"title":"Subtraction","slug":"subtraction"},{"level":3,"title":"Multiplication","slug":"multiplication"},{"level":3,"title":"Floored Division","slug":"floored-division"},{"level":3,"title":"Floored Modulo Division","slug":"floored-modulo-division"},{"level":2,"title":"Logical Operators","slug":"logical-operators"},{"level":3,"title":"Assignment Operator","slug":"assignment-operator"},{"level":3,"title":"Minimum Operator","slug":"minimum-operator"},{"level":3,"title":"Maximum Operator","slug":"maximum-operator"},{"level":3,"title":"Swap Operator","slug":"swap-operator"}],"relativePath":"commands/scoreboard-operations.md"}',t={},s=o(`<p>Scoreboards can be used to perform complex operations, similar to <a href="/concepts/molang.html">Molang</a>. Operations come in two flavors: mathematical, and logical.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Operations are performed using the <code>/scoreboard players operation</code> command. The full syntax is laid out below:</p><div class="language-"><pre><code>/scoreboard players operation &lt;targetScore&gt; &lt;objective&gt; &lt;operation&gt; &lt;sourceScore&gt; &lt;objective&gt;
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The command consists of two score holders: The target score, and the source score. The target score is the value being operated on, and the source score is the value affecting the operation. The result of the operation is written into the target score, and the source score&#39;s value is not touched, save for <a href="/commands/scoreboard-operations.html#swap_operator">one operation</a>.</p><h2 id="mathematical-operators" tabindex="-1">Mathematical Operators <a class="header-anchor" href="#mathematical-operators" aria-hidden="true">#</a></h2><p>Mathematical operators use arithmetic to affect the target score. There are five mathematical operations available: addition, subtraction, multiplication, floor division, and floor modulo division.</p><p>For each of the following examples below, assume that score holder <code>A var</code> equals 25, and <code>B var</code> equals 10.</p><h3 id="addition" tabindex="-1">Addition <a class="header-anchor" href="#addition" aria-hidden="true">#</a></h3><p>Operator: <strong>+=</strong></p><p>This operation adds the target score and source scores together, then stores the sum into the target score.</p><div class="language-"><pre><code>/scoreboard players operation A var += B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = A + B</code>, and as such <code>25 + 10 = 35</code>.</p><h3 id="subtraction" tabindex="-1">Subtraction <a class="header-anchor" href="#subtraction" aria-hidden="true">#</a></h3><p>Operator: <strong>-=</strong></p><p>This operation subtracts the target score by the source score, then stores the difference into the target score.</p><div class="language-"><pre><code>/scoreboard players operation A var -= B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = A - B</code>, and as such <code>25 - 10 = 15</code>.</p><h3 id="multiplication" tabindex="-1">Multiplication <a class="header-anchor" href="#multiplication" aria-hidden="true">#</a></h3><p>Operator: <strong>*=</strong></p><p>This operation multiplies the target score by the source score, then stores the product into the target score.</p><div class="language-"><pre><code>/scoreboard players operation A var *= B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = A * B</code>, and as such <code>25 * 10 = 250</code>.</p><h3 id="floored-division" tabindex="-1">Floored Division <a class="header-anchor" href="#floored-division" aria-hidden="true">#</a></h3><p>Operator: <strong>/=</strong></p><p>This operation divides the target score by the source score, then stores the quotient into the target score. Because score values can only be integers, the value is floored, or rounded down.</p><div class="language-"><pre><code>/scoreboard players operation A var += B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = floor(A / B)</code>, and as such <code>floor(25 / 10) = 2</code>.</p><h3 id="floored-modulo-division" tabindex="-1">Floored Modulo Division <a class="header-anchor" href="#floored-modulo-division" aria-hidden="true">#</a></h3><p>Operator: <strong>%=</strong></p><p>This operation also divides the target score by the source score, but instead returns the remainder after the division into the target score. This is also floored.</p><div class="language-"><pre><code>/scoreboard players operation A var += B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = floor(mod(A, B))</code>, and as such <code>floor(mod(25, 10)) = 5</code>.</p><h2 id="logical-operators" tabindex="-1">Logical Operators <a class="header-anchor" href="#logical-operators" aria-hidden="true">#</a></h2><p>Logical operations use logic gates and assignments to affect the target score. There are four logical operations available: assignment, less than, greater than, and swap.</p><p>Similar to the above, assume that score holder <code>A var</code> equals 25, and <code>B var</code> equals 10.</p><h3 id="assignment-operator" tabindex="-1">Assignment Operator <a class="header-anchor" href="#assignment-operator" aria-hidden="true">#</a></h3><p>Operator: <strong>=</strong></p><p>This operation sets the target score equal to the source score.</p><div class="language-"><pre><code>/scoreboard players operation A var = B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = B</code>, and as such the result is <code>10</code>.</p><h3 id="minimum-operator" tabindex="-1">Minimum Operator <a class="header-anchor" href="#minimum-operator" aria-hidden="true">#</a></h3><p>Operator: <strong>&lt;</strong></p><p>This operation returns the smallest of the input scores, and stores it into the target score.</p><div class="language-"><pre><code>/scoreboard players operation A var &lt; B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = min(A, B)</code>, and as such <code>min(25, 10) = 10</code>.</p><h3 id="maximum-operator" tabindex="-1">Maximum Operator <a class="header-anchor" href="#maximum-operator" aria-hidden="true">#</a></h3><p>Operator: <strong>&gt;</strong></p><p>This operation returns the largest of the input scores, and stores it into the target score.</p><div class="language-"><pre><code>/scoreboard players operation A var &lt; B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>A = max(A, B)</code>, and as such <code>max(25, 10) = 25</code>.</p><h3 id="swap-operator" tabindex="-1">Swap Operator <a class="header-anchor" href="#swap-operator" aria-hidden="true">#</a></h3><p>Operator: <strong>&gt;&lt;</strong></p><p>This operation swaps the target score and source scores with each other. This is the only operation that affects the source score.</p><div class="language-"><pre><code>/scoreboard players operation A var &gt;&lt; B var
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>This can be seen as three operations: <code>temp = A; A = B; B = temp;</code>, and as such <code>A var = 10</code> and <code>B var = 25</code>.</p>`,56),i=[s];function n(d,c,l,p,h,u){return r(),a("div",null,i)}var g=e(t,[["render",n]]);export{m as __pageData,g as default};
