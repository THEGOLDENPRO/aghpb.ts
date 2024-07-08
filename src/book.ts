export interface BookCommitInfo {
    url: string,
    author: string,
    hash: string,
}

export interface Book {
    name: string;
    category: string,
    dateAdded: Date
    image?: ArrayBuffer,
    searchId: string,
    commit: BookCommitInfo,
}