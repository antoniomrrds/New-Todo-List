import { FormattedError } from "@/api/error/types";
import { tagApi } from "@/api/service/tag/tag-api";
import { Tag } from "@/api/service/tag/types";
import { useQuery } from "react-query";

export const useQueryTags = () => {
  const {
    data: tags = [],
    isLoading: isLoadingTags,
    error: errorTags,
  } = useQuery<Tag[], FormattedError>("tags", tagApi.getAll);

  return { tags, isLoadingTags, errorTags };
};
