import Root from "$lib/components/ui/tooltip/tooltip.svelte";
import Trigger from "$lib/components/ui/tooltip/tooltip-trigger.svelte";
import Content from "$lib/components/ui/tooltip/tooltip-content.svelte";
import Provider from "$lib/components/ui/tooltip/tooltip-provider.svelte";
import Portal from "$lib/components/ui/tooltip/tooltip-portal.svelte";

export {
	Content,
	Content as TooltipContent,
	Portal,
	Portal as TooltipPortal,
	Provider,
	Provider as TooltipProvider,
	Root,
	Root as Tooltip,
	Trigger,
	Trigger as TooltipTrigger,
};
