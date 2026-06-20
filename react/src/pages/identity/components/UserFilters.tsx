import { Input, Button, makeStyles } from "@fluentui/react-components";
import { SearchRegular, DismissRegular } from "@fluentui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    gap: "var(--spacingHorizontalS)",
    marginBlockEnd: "var(--spacingVerticalS)",
  },
});

type UserFiltersProps = {
  onFilterChange: (filter: string) => void;
};

export function UserFilters({ onFilterChange }: UserFiltersProps) {
  const { t } = useTranslation();
  const [draft, setDraft] = useState("");
  const [applied, setApplied] = useState("");
  const styles = useStyles();

  const handleSearch = () => {
    const trimmed = draft.trim();
    setApplied(trimmed);
    onFilterChange(trimmed);
  };

  const handleReset = () => {
    setDraft("");
    setApplied("");
    onFilterChange("");
  };

  return (
    <div className={styles.toolbar}>
      <Input
        placeholder={t("AbpIdentity::Search")}
        value={draft}
        onChange={(_, data) => setDraft(data.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        contentAfter={
          <Button
            appearance="transparent"
            size="small"
            icon={<SearchRegular />}
            onClick={handleSearch}
            aria-label={t("AbpIdentity::Search")}
          />
        }
      />
      {applied && (
        <Button appearance="subtle" size="small" icon={<DismissRegular />} onClick={handleReset}>
          {t("AbpIdentity::Reset")}
        </Button>
      )}
    </div>
  );
}
