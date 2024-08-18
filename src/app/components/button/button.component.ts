import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export default class ButtonComponent {

  @Input() nomargin: boolean = false;

  @Input() widthfit: boolean = false;

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  disabled = false;

  @Input() rounded: boolean = false

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'medium' | 'large' = 'medium';

  @Input() mode:
    | 'primary'
    | 'success'
    | 'danger' = 'primary';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['button', `button--${this.size}`, `button--${this.mode}`, this.rounded ? 'rounded': ''];
  }

}
