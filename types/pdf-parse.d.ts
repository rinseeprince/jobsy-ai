declare module "pdf-parse" {
  interface PDFInfo {
    PDFFormatVersion?: string
    IsAcroFormPresent?: boolean
    IsXFAPresent?: boolean
    Title?: string
    Author?: string
    Subject?: string
    Creator?: string
    Producer?: string
    CreationDate?: Date
    ModDate?: Date
    [key: string]: unknown
  }

  interface PDFMetadata {
    [key: string]: unknown
  }

  interface PDFData {
    numpages: number
    numrender: number
    info: PDFInfo
    metadata: PDFMetadata | null
    version: string
    text: string
  }

  interface PDFParseOptions {
    pagerender?: (pageData: unknown) => string
    max?: number
    version?: string
    [key: string]: unknown
  }

  function pdfParse(buffer: Buffer, options?: PDFParseOptions): Promise<PDFData>
  export = pdfParse
}
