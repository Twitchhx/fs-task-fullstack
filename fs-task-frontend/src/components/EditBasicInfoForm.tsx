import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_MUTATION } from '../graphql/mutations.ts';

interface EditBasicInfoFormProps {
  user: any; 
  onCancel: () => void;
}

const EditBasicInfoForm: React.FC<EditBasicInfoFormProps> = ({ user, onCancel }) => {
  const omitTypename = (obj) => {
    const { __typename, ...rest } = obj;
    return rest;
  };
  

  const cleanUser = omitTypename(user);
  const { register, handleSubmit } = useForm({
    defaultValues: cleanUser,
  });

  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const onSubmit = async (data: any) => {
    const existingUser = cleanUser;
  
    const sanitizedUpdateInput = {
      firstName: data.firstName || existingUser.firstName,
      fatherName: data.fatherName || existingUser.fatherName,
      grandfatherName: data.grandfatherName || existingUser.grandfatherName,
      familyName: data.familyName || existingUser.familyName,
      localizedName: {
        firstName: data.localizedName?.firstName || existingUser.localizedName.firstName,
        fatherName: data.localizedName?.fatherName || existingUser.localizedName.fatherName,
        grandfatherName: data.localizedName?.grandfatherName || existingUser.localizedName.grandfatherName,
        familyName: data.localizedName?.familyName || existingUser.localizedName.familyName,
      },
      nationalId: {
        idNumber: data.nationalId?.idNumber || existingUser.nationalId.idNumber,
        expiryDate: data.nationalId?.expiryDate || existingUser.nationalId.expiryDate,
      },
      nationalities: existingUser.nationalities.map((nationality, index) => ({
        country: {
          name: (data.nationalities && data.nationalities[index]?.country?.name) || nationality.country.name,
        },
      })),
      maritalStatus: {
        name: data.maritalStatus?.name || existingUser.maritalStatus.name,
      },
      dependants: data.dependants !== undefined ? Number(data.dependants) : existingUser.dependants,
    };
  
    try {
      const result = await updateUser({
        variables: {
          userId: 1,
          updateInput: omitTypename(sanitizedUpdateInput),
        },
      });
      console.log('Updated Data:', result.data.updateUser);
      window.location.reload();
      onCancel();
    } catch (error) {
      console.error('Error updating user:', error);
      console.log(JSON.stringify(error, null, 2));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded border shadow rounded mb-6"
    >
      <h1 className="text-xl font-semibold mb-4">Edit Basic Information</h1>
  
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mb-2">
          <label>National ID Number</label>
          <input
            {...register('nationalId.idNumber')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>National ID Expiring Date</label>
          <input placeholder="YYYY-MM-DD"
            {...register('nationalId.expiryDate')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-2"></div>
        <br />
        <div className="mb-2">
          <label>First Name</label>
          <input
            {...register('firstName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Father Name</label>
          <input
            {...register('fatherName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Grandfather Name</label>
          <input
            {...register('grandfatherName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Family Name</label>
          <input
            {...register('familyName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>الأسم الأول</label>
          <input
            {...register('localizedName.firstName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>اسم الأب</label>
          <input
            {...register('localizedName.fatherName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>اسم الجد</label>
          <input
            {...register('localizedName.grandfatherName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>اللقب/اسم العائلة</label>
          <input
            {...register('localizedName.familyName')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Nationality</label>
          <input
            {...register('nationalities[0].country.name')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Additional Nationality</label>
          <input
            {...register('nationalities[1].country.name')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Marital Status</label>
          <input
            {...register('maritalStatus.name')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
  
        <div className="mb-2">
          <label>Dependencies</label>
          <input type="number"
            {...register('dependants')}
            className="block w-full px-2 py-1 border rounded"
          />
        </div>
      </div>
  
      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          style={{ marginLeft: "20px" }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
  
};

export default EditBasicInfoForm;