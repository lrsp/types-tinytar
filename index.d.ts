// Type definitions for tinytar 0.1.0
// Project: https://github.com/kravets-levko/tinytar
// Definitions by: Lucas R. San Pedro <https://github.com/lrsp>

export = TinyTar;
export as namespace tinytar;

declare namespace TinyTar {

    export const enum FileType {
        REGTYPE = 0, // regular file
        LNKTYPE = 1, // hard link
        SYMTYPE = 2, // symbolic link
        CHRTYPE = 3, // character special
        BLKTYPE = 4, // block special
        DIRTYPE = 5, // directory
        FIFOTYPE = 6, // FIFO special
        CONTTYPE = 7  // reserved
    }

    export interface UntarOptions {
        readonly extractData?: boolean;
        readonly checkHeader?: boolean;
        readonly checkChecksum?: boolean;
        readonly checkFileSize?: boolean;
    }

    export interface TarFile {
        readonly name: string;
        readonly type: FileType;
        readonly data: Uint8Array;
        readonly uid: number;
        readonly gid: number;
        readonly mode: number;
        readonly owner: string;
        readonly group: string;
        readonly accessTime: Date;
        readonly createTime: Date;
        readonly modifyTime: Date;
        readonly majorNumber: number;
        readonly minorNumber: number;
    }

    export function untar(buffer: Uint8Array, options?: UntarOptions): Array<TarFile>;

}
