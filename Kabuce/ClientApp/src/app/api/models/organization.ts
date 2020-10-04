/* tslint:disable */
import { CouchAttachment } from './couch-attachment';
export interface Organization {
  '_attachments'?: { [key: string]: CouchAttachment };
  '_conflicts'?: Array<string>;
  '_id'?: null | string;
  '_rev'?: null | string;
  domain?: null | string;
  id?: string;
  name?: null | string;
  rev?: string;
}
