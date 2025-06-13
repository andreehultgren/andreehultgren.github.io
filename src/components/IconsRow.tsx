import { Suspense, type ComponentType } from "react";
import { LoadingSpinner, Stack } from "src/components";
import { LandingTextSmall } from "src/components/Text";

type Props = {
  icons: { Icon: ComponentType; label: string }[];
};

export default function IconsRow({ icons }: Props) {
  return (
    <Stack
      direction="row"
      spacing={8}
      alignItems="center"
      justifyContent="center"
    >
      {icons.map(({ Icon, label }) => (
        <Stack key={label} alignItems="center" spacing={2}>
          <Suspense fallback={<LoadingSpinner />}>
            <Icon />
          </Suspense>
          <LandingTextSmall>{label}</LandingTextSmall>
        </Stack>
      ))}
    </Stack>
  );
}
