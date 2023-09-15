interface FileAttachmentProps {
  fileName: string;
}

export const FileAttachment = ({
  fileName
}: FileAttachmentProps) => {
  return (
    <p>File {fileName}</p>
  );
};