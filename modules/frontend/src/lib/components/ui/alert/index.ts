import Root from "$lib/components/ui/alert/alert.svelte";
import Description from "$lib/components/ui/alert/alert-description.svelte";
import Title from "$lib/components/ui/alert/alert-title.svelte";
import Action from "$lib/components/ui/alert/alert-action.svelte";
export { alert_variants, type AlertVariant } from "$lib/components/ui/alert/alert.svelte";

export {
	Action,
	Action as AlertAction,
	Description,
	Description as AlertDescription,
	Root,
	Root as Alert,
	Title,
	Title as AlertTitle,
};
