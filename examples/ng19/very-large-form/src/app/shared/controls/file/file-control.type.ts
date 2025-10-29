import { NgxFwControl } from 'ngx-formwork';

export interface FileControl extends NgxFwControl {
  type: 'file';
  multiple?: boolean;
  /** e.g., ['image/*','application/pdf'] */
  accept?: string[];
}
