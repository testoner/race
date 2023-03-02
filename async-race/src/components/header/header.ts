const renderHeader = async (): Promise<void> => {
  const html = `
   <div class="button-garage">
      <button class="garBtn">TO GARAGE</button>
    </div>
    <div class="button-winner">
      <button class="winBtn">TO WINNERS</button>
    </div>
  `;

  const root = document.createElement('header');
  root.setAttribute('class', 'header');
  root.innerHTML = html;
  await document.body.appendChild(root);

  const btnGar = <HTMLButtonElement>document.querySelector('.garBtn');

  btnGar.disabled = true;
};
export default renderHeader;
