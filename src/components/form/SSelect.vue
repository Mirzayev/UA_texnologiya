<template>
  <div>
    <label
      v-if="label"
      for=""
      class="mb-1 sm:mb-2 font-medium text-white text-sm sm:text-base flex justify-start"
      :class="error ? 'text-[red]' : ''"
      >{{ label }}</label
    >
    <el-select
      v-model="value"
      clearable
      size="large"
      :placeholder="placeholder"
      @change="handleSelect"
      class="w-full border border-gray-500 rounded-[4px]"
      :class="error ? 'border border-[red] rounded-[4px]' : ''"
    >
      <el-option
        v-for="item in data"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  data?: {
    value: string;
    label: string;
  };
  modelValue: string;
  label: string;
  placeholder: string;
  error: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  error: false,
});

const value = ref(props.modelValue);

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
}>();

function handleSelect(e) {
  emit("update:modelValue", e);
}
</script>
