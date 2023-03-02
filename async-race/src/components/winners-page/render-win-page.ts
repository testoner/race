const winPage = (): void => {
  const html = `
    <div class='win-wrapper'>
      <div class='win-score'>
        <div class='score-tittle'>
          <h2>Winners score</h2>
        </div>
        <div class='score-table'>
        </div>
      </div>
    </div>
  `;
  const root = document.createElement('main');
  root.setAttribute('class', 'main-score block');
  root.innerHTML = html;
  document.body.appendChild(root);
};
export default winPage;
