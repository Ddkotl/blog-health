import { Button } from "@/shared/ui/button";
//import { selectFile } from "@/shared/lib/file";
import { ProfileAvatar } from "@/entities/user/profile";
import { Spinner } from "@/shared/ui/spinner";
import { useUploadAvatar } from "../_vm/use-upload-avatar";

export function AvatarField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value?: string) => void;
}) {
  const { handleFileSelect, isPending } = useUploadAvatar({
    onSuccess: onChange,
  });

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      type="button"
      onClick={handleFileSelect}
    >
      {isPending && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="Загрузка новой аватарки" />
        </div>
      )}
      <ProfileAvatar
        className="w-full h-full"
        profile={{ email: "no64129@gmail.com", image: value }}
      />
    </Button>
  );
}