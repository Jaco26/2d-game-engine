
export class Loader {
  private images = {}

  private computeFilenameFromPath(path: string): string {
    return path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  }

  private createImg(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = function() {
        resolve(img)
      }
    })
  }

  async load(src: string, shortname?: string) {
    const name = shortname ? shortname : this.computeFilenameFromPath(src)
    const img = await this.createImg(src)
    this.images[name] = img
  }

  loadBatch(args: string[][]) {
    return Promise.all(args.map(([src, shortname]) => this.load(src, shortname)))
  }

  get(name: string): HTMLImageElement {
    return this.images[name]
  }
}