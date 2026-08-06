import Root from "$lib/components/ui/select/select.svelte";
import Group from "$lib/components/ui/select/select-group.svelte";
import Label from "$lib/components/ui/select/select-label.svelte";
import Item from "$lib/components/ui/select/select-item.svelte";
import Content from "$lib/components/ui/select/select-content.svelte";
import Trigger from "$lib/components/ui/select/select-trigger.svelte";
import Separator from "$lib/components/ui/select/select-separator.svelte";
import ScrollDownButton from "$lib/components/ui/select/select-scroll-down-button.svelte";
import ScrollUpButton from "$lib/components/ui/select/select-scroll-up-button.svelte";
import GroupHeading from "$lib/components/ui/select/select-group-heading.svelte";
import Portal from "$lib/components/ui/select/select-portal.svelte";

export {
	Content,
	Content as SelectContent,
	Group,
	Group as SelectGroup,
	GroupHeading,
	GroupHeading as SelectGroupHeading,
	Item,
	Item as SelectItem,
	Label,
	Label as SelectLabel,
	Portal,
	Portal as SelectPortal,
	Root,
	Root as Select,
	ScrollDownButton,
	ScrollDownButton as SelectScrollDownButton,
	ScrollUpButton,
	ScrollUpButton as SelectScrollUpButton,
	Separator,
	Separator as SelectSeparator,
	Trigger,
	Trigger as SelectTrigger,
};
