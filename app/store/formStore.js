import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFormStore = create(
  persist(
    (set) => ({
      formData: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
      },
      setFormData: (data) => set({ formData: data }),
      updateFormField: (field, value) => 
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: value
          }
        })),
      resetForm: () => 
        set({ 
          formData: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
          }
        }),
    }),
    {
      name: 'form-storage',
    }
  )
); 