import Description from "$lib/components/ui/form/form-description.svelte";
import Label from "$lib/components/ui/form/form-label.svelte";
import FieldErrors from "$lib/components/ui/form/form-field-errors.svelte";
import Field from "$lib/components/ui/form/form-field.svelte";
import Fieldset from "$lib/components/ui/form/form-fieldset.svelte";
import Legend from "$lib/components/ui/form/form-legend.svelte";
import ElementField from "$lib/components/ui/form/form-element-field.svelte";
import Button from "$lib/components/ui/form/form-button.svelte";

export {
	Button,
	Button as FormButton,
	Description,
	Description as FormDescription,
	ElementField,
	ElementField as FormElementField,
	Field,
	Field as FormField,
	FieldErrors,
	FieldErrors as FormFieldErrors,
	Fieldset,
	Fieldset as FormFieldset,
	Label,
	Label as FormLabel,
	Legend,
	Legend as FormLegend,
};

export { Control, Control as FormControl } from "formsnap";
