let registry=[],watchedIcons=[];export function watchIcon(r){watchedIcons.push(r)}export function unwatchIcon(r){watchedIcons=watchedIcons.filter((e=>e!==r))}export function getIconLibrary(r){return registry.filter((e=>e.name===r))[0]}export function registerIconLibrary(r,e){unregisterIconLibrary(r),registry.push({name:r,resolver:e.resolver,mutator:e.mutator}),watchedIcons.map((e=>{e.library===r&&e.redraw()}))}export function unregisterIconLibrary(r){registry=registry.filter((e=>e.name!==r))}window.ceRegisterIconLibrary=registerIconLibrary;