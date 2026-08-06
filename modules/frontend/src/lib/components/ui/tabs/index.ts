import Root from "$lib/components/ui/tabs/tabs.svelte";
import Content from "$lib/components/ui/tabs/tabs-content.svelte";
import List, {
	tabs_list_variants,
	type TabsListVariant,
} from "$lib/components/ui/tabs/tabs-list.svelte";
import Trigger from "$lib/components/ui/tabs/tabs-trigger.svelte";

export {
	Content,
	Content as TabsContent,
	List,
	List as TabsList,
	Root,
	Root as Tabs,
	tabs_list_variants,
	type TabsListVariant,
	Trigger,
	Trigger as TabsTrigger,
};
