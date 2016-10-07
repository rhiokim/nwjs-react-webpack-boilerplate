/* global nw */
const menu = new nw.Menu();

menu.append(new nw.MenuItem({ label: 'Show Debug Window', click: () => {
  nw.Window.get().showDevTools();
} }));

export default menu;
