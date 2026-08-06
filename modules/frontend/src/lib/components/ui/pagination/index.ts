import Root from "$lib/components/ui/pagination/pagination.svelte";
import Content from "$lib/components/ui/pagination/pagination-content.svelte";
import Item from "$lib/components/ui/pagination/pagination-item.svelte";
import Link from "$lib/components/ui/pagination/pagination-link.svelte";
import PrevButton from "$lib/components/ui/pagination/pagination-prev-button.svelte";
import NextButton from "$lib/components/ui/pagination/pagination-next-button.svelte";
import Ellipsis from "$lib/components/ui/pagination/pagination-ellipsis.svelte";
import Previous from "$lib/components/ui/pagination/pagination-previous.svelte";
import Next from "$lib/components/ui/pagination/pagination-next.svelte";

export {
	Content,
	Content as PaginationContent,
	Ellipsis,
	Ellipsis as PaginationEllipsis,
	Item,
	Item as PaginationItem,
	Link,
	Link as PaginationLink,
	Next,
	Next as PaginationNext,
	/** @deprecated Use `Next` instead. */
	NextButton,
	/** @deprecated Use `PaginationNext` instead. */
	NextButton as PaginationNextButton,
	/** @deprecated Use `Previous` instead. */
	PrevButton,
	/** @deprecated Use `PaginationPrevious` instead. */
	PrevButton as PaginationPrevButton,
	Previous,
	Previous as PaginationPrevious,
	Root,
	Root as Pagination,
};
