import { AbstractControl } from '@angular/forms';

export function isEmpty(v: unknown): boolean {
  if (v === null) {
    return true;
  }
  if (v === undefined) {
    return true;
  }
  return v === '';
}

export function toNumber(v: unknown): number {
  if (typeof v === 'number') {
    return v;
  }
  return Number(v);
}

export function getByPath(
  ctrl: AbstractControl | null,
  path: string,
): AbstractControl | null {
  if (!ctrl) {
    return null;
  }
  const segments = path.split('.');
  let node: AbstractControl | null = ctrl.root as AbstractControl | null;
  for (const seg of segments) {
    if (!node) {
      return null;
    }
    node =
      typeof (node as unknown as { get(path: string): AbstractControl | null })
        .get === 'function'
        ? (
            node as unknown as { get(path: string): AbstractControl | null }
          ).get(seg)
        : null;
  }
  return node;
}

export function asFiles(value: unknown): File[] {
  if (value == null) {
    return [];
  }

  if (value instanceof File) {
    return [value];
  }

  if (value instanceof FileList) {
    return Array.from(value);
  }

  if (Array.isArray(value)) {
    const files = value.filter((f): f is File => f instanceof File);
    return files.length ? files : [];
  }

  return [];
}

type TokenKind = 'mimeWildcard' | 'mimeExact' | 'extension' | 'unknown';

export function getTokenKind(token: string): TokenKind {
  if (token.endsWith('/*')) {
    return 'mimeWildcard';
  }

  if (token.includes('/')) {
    return 'mimeExact';
  }

  if (token.startsWith('.')) {
    return 'extension';
  }

  return 'unknown';
}

export function matchesAccept(
  file: File,
  acceptList: readonly string[],
): boolean {
  if (!acceptList || acceptList.length === 0) {
    return true;
  }

  const name = (file.name || '').toLowerCase();
  const mime = file.type || '';

  for (const token of acceptList) {
    if (!token) {
      continue;
    }

    const kind = getTokenKind(token);

    switch (kind) {
      case 'mimeWildcard': {
        const prefix = token.slice(0, -2);
        return mime.startsWith(prefix + '/');
      }
      case 'mimeExact': {
        return mime === token;
      }
      case 'extension': {
        return name.endsWith(token.toLowerCase());
      }
      default: {
        return false;
      }
    }
  }

  return false;
}
