import { hash as _hash, compare } from 'bcrypt';

export function hash(pwd) { return _hash(pwd, 10); }
export function Compare(pwd, hash) { return compare(pwd, hash); }
