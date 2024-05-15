import {getChildren, getMeta, getName, isDirectory, isFile, mkdir, mkfile} from '@hexlet/immutable-fs-trees';

const dir = mkdir('dir', [
    mkdir('d1', [
        mkfile('f1'),
    ]),
    mkdir('d2', [
        mkdir('d3' [
            mkfile('f2')
            ]),
    ]),
], {'kaboom?': true});

const children = getChildren(dir);
const name = getName(dir);
const meta = getMeta(dir);
console.log(children);
console.log(name);
console.log(meta);
console.log(isFile(dir));
console.log(isDirectory(dir));
