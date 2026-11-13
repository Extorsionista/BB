(() => {
  const clock = document.getElementById('clock');
  const updated = document.getElementById('updated');
  const pageStatus = document.getElementById('pageStatus');
  const count = document.getElementById('refreshCount');
  const button = document.getElementById('refresh');
  let checks = 0;
  const stamp = () => new Date().toLocaleTimeString([], {hour12:true});
  function tick(){ clock.textContent = stamp(); }
  function refresh(){
    checks++;
    pageStatus.textContent = 'Interface responsive · no console connection';
    count.textContent = `${checks} ${checks === 1 ? 'check' : 'checks'}`;
    updated.textContent = `Last interface refresh: ${new Date().toLocaleString()}`;
    button.textContent = '✓ STATUS UPDATED';
    window.setTimeout(() => button.textContent = '↻ REFRESH STATUS', 1100);
  }
  button.addEventListener('click', refresh);
  document.getElementById('year').textContent = new Date().getFullYear();
  tick(); window.setInterval(tick, 1000); refresh();
})();