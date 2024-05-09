import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { registry } from '../registry';

@Component({
  selector: 'app-dynamic-loader',
  template: `<div #vc></div>`,
  styleUrl: './dynamic-loader.component.scss',
})
export class DynamicLoaderComponent {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  @Input() elementName: string = '';
  @Input() importName!: keyof typeof registry;

  ngAfterViewInit(): void {
    const importFn = registry[this.importName];
    if (importFn) {
      importFn()
        .then(() => {
          console.debug(`Element ${this.elementName} loaded!`);
          const element = document.createElement(this.elementName);
          this.vc.nativeElement.appendChild(element);
        })
        .catch((err: any) =>
          console.error(`Error loading ${this.elementName}:`, err)
        );
    } else {
      console.error(
        `Import function for '${this.importName}' not found in registry.`
      );
    }
  }
}
