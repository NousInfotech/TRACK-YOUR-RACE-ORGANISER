import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm, Path, DefaultValues } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { cn } from "@/lib/utils";
import { DatePicker } from "@/components/ui/date-picker";

interface UseCustomFormProps<TSchema extends ZodSchema> {
  schema: TSchema;
  defaultValues?: DefaultValues<z.infer<TSchema>>;
}

function useCustomForm<TSchema extends ZodSchema>({
  schema,
  defaultValues = {} as DefaultValues<z.infer<TSchema>>,
}: UseCustomFormProps<TSchema>) {
  const form = useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  const { handleSubmit, control, ...props } = form;

  interface FormWrapperProps {
    children: React.ReactNode;
    onSubmit: (data: z.infer<TSchema>) => void;
    onError?: (errors: any) => void;
  }

  const FormWrapper: React.FC<FormWrapperProps> = ({
    children,
    onSubmit,
    onError,
  }) => (
    <Form {...form}>
      <form
        className="h-full px-1 w-full"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {children}
      </form>
    </Form>
  );

  const FormInput = <TName extends Path<z.infer<TSchema>>>({
    title,
    placeholder,
    description,
    id,
    type,
    className,
    ...props
  }: {
    title: string;
    placeholder?: string;
    description?: string;
    id: TName;
    type?: string;
    className?: string;
    [key: string]: any;
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="text-sm font-medium">
            {title}
            {props.required && <span className="text-destructive"> *</span>}
          </FormLabel>
          <FormControl>
            <Input
              id={id}
              {...field}
              {...props}
              type={type}
              placeholder={placeholder}
              className={cn(
                "h-10 px-3 py-2 text-sm rounded-md border border-input bg-background",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "transition-colors duration-200",
                className
              )}
            />
          </FormControl>
          {description && (
            <FormDescription className="text-[0.8rem] text-muted-foreground">
              {description}
            </FormDescription>
          )}
          <FormMessage className="text-xs text-destructive" />
        </FormItem>
      )}
    />
  );

  const FormRadioGroup = <TName extends Path<z.infer<TSchema>>>({
    title,
    id,
    options,
  }: {
    title: string;
    id: TName;
    options: { label: string; value: string }[];
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            {options.map((option) => (
              <RadioGroupItem key={option.value} value={option.value}>
                {option.label}
              </RadioGroupItem>
            ))}
          </RadioGroup>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const FormSelect = <TName extends Path<z.infer<TSchema>>>({
    title,
    id,
    options,
    required,
  }: {
    title: string;
    id: TName;
    required?: boolean;
    options: { label: string; value: string }[];
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {title} {required && <span className="text-destructive"> *</span>}
          </FormLabel>
          <FormControl>
            <Select
              required={required}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const FormSwitch = <TName extends Path<z.infer<TSchema>>>({
    title,
    id,
  }: {
    title: string;
    id: TName;
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const FormTextarea = <TName extends Path<z.infer<TSchema>>>({
    title,
    placeholder,
    id,
    required,
  }: {
    title: string;
    required?: boolean;
    placeholder?: string;
    id: TName;
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {title}{" "}
            {required && <span className="text-destructive"> *</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              required={required}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const FormCheckbox = <TName extends Path<z.infer<TSchema>>>({
    title,
    id,
  }: {
    title: string;
    id: TName;
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{title}</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
  const FormDatePicker = <TName extends Path<z.infer<TSchema>>>({
    title,
    id,
    placeholder,
    required = false,
  }: {
    title: string;
    id: TName;
    placeholder: string;
    required?: boolean;
  }) => (
    <FormField
      control={control}
      name={id}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            {title}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            <DatePicker
              placeholder={placeholder}
              {...field}
              date={field.value}
              required={required}
              onChange={(date: Date | undefined) => field.onChange(date)} // Handle date changes
            />
          </FormControl>
          <FormMessage>
            {fieldState.error && (
              <span className="text-red-500">{fieldState.error.message}</span>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );

  return {
    FormWrapper,
    FormInput,
    FormRadioGroup,
    FormSelect,
    FormSwitch,
    FormTextarea,
    FormCheckbox,
    FormDatePicker,
    handleSubmit,
    ...props,
  };
}

export default useCustomForm;
